import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
 @Input({required:true}) title =''
 showBox=false;
 sortForm = new FormGroup({
  sortType: new FormControl('', [Validators.required]),
});

 constructor(private productsevice:ProductsService){}
 items:Product[]=[]
 ngOnInit(): void {
   this.productsevice.getProductsInEachCategry(this.title).subscribe((res:Product[])=>{
    this.items=res
   })
 }

 showFilterBox(){
  this.showBox = !this.showBox
 }
 onSelect(){
  if(this.sortForm.invalid){
    return
  }
   let sort =this.sortForm.value.sortType;
    if(sort === 'price'){
      this.items=this.items.sort((a:any,b:any)=>  b.price -a.price)
     
    }

    if(sort === 'rate'){
      this.items=this.items.sort((a:any,b:any)=>  b.rating.rate - a.rating.rate )
    }

    this.showBox=false;
    this.sortForm.reset();
  
 }
}


