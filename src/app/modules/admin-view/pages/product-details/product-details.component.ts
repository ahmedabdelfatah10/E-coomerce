import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productForm: FormGroup;
  showForm = false;
  image: string;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = Number(params.id);
      this.productservice.products.subscribe((items:Product[])=>{
        console.log(items)
        let item=items.filter((item)=> Number(item.id) === this.id)[0]
        console.log(item)
        this.showForm = true;
        this.prepareForm(item);
        this.image = item.image;
      })

    });
  }

  prepareForm(res: Product) {
    this.productForm = new FormGroup({
      id: new FormControl({ value: res.id, disabled: true }, [
        Validators.required,
      ]),
      category: new FormControl(res.category, [Validators.required]),
      price: new FormControl(res.price, [Validators.required]),
      title: new FormControl(res.title, [Validators.required]),
      image: new FormControl(res.image, [Validators.required]),
      description: new FormControl(res.description, [Validators.required]),
    });
  }

  submitForm() {
    if (this.productForm.invalid) {
      return;
    }
    let formValue = { ...this.productForm.value, id: this.id };
    this.productservice.updateProduct(formValue).pipe(take(1)).subscribe((res) => {
      let products: any = localStorage.getItem('products');

      if (products) {
        products = JSON.parse(products);
        let item = products.filter((item: any) => item.id == this.id)[0];
        products = products.filter((item: any) => item.id != this.id);
        item = {
          ...item,
          id: Number(formValue.id),
          category: formValue.category,
          price: formValue.price,
          title: formValue.title,
          image: formValue.image,
          descrition: formValue.description,
        };
        products = [...products, item];
        this.productservice.products.next(products)
        products.sort((a: any, b: any) => {
          return a.id - b.id;
        });
      }
      localStorage.removeItem('products');
      localStorage.setItem('products', JSON.stringify(products));
      this.router.navigateByUrl('/dashboard');
    });
  }

  showImage(e: any) {
    this.image = e.target.value;
  }

  deleteItem() {
    this.productservice.deleteProduct(this.id).pipe(take(1)).subscribe((res) => {
    this.productservice.products.pipe(take(1)).subscribe((items:Product[])=>{
       items = items.filter((item: any) => item.id != this.id)
       localStorage.removeItem('products');
       let data=JSON.stringify(items);
       this.productservice.products.next(items);
       localStorage.setItem('products', data);
         this.router.navigateByUrl('/dashboard');
    })
    });
  }
}
