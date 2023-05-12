import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

productForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
    ]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private productservice:ProductsService,private router:Router){}
  addItem(){
        if(this.productForm.invalid){
          return;
        }
            this.productservice.addProduct(this.productForm.value as Product).subscribe((res)=>{
              this.productservice.products.pipe(take(1)).subscribe((items:any[])=>{
                let newItem={...this.productForm.value,rating:{rate:0,count:0}}
                 items = [...items,newItem]

                 localStorage.removeItem('products');
                 let data=JSON.stringify(items)
                 this.productservice.products.next(items)
                 localStorage.setItem('products', data);

                   this.router.navigateByUrl('/dashboard');
              })
              });

  }

  showImage(e:any){

  }
}
