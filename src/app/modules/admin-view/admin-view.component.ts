import { Component, OnDestroy, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['id', 'title', 'category', 'image','price'];
  dataSource:any
  private readonly unsubscribe$: Subject<void> = new Subject();

 constructor(private productservice:ProductsService,private router:Router){}

 ngOnInit(): void {
 this.productservice.products.pipe(takeUntil(this.unsubscribe$)).subscribe((items:Product[])=>{
  console.log(items);
   if(!items.length){

    this.productservice.getProducts().subscribe((res:any)=>{
      localStorage.setItem('products',JSON.stringify(res))
      this.productservice.products.next(res);
    this.dataSource=res
     })
   }else{

    this.dataSource=items
   }
 })


 }

 onClick(row:any){
  this.router.navigateByUrl(`/dashboard/product/${row.id}`)
 }
 addProduct(){
  this.router.navigateByUrl(`/dashboard/add-product`)
}
ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}
 
}
