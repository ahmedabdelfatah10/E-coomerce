import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  length = 20;
  pageSize = 20;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15,20];
   item:Product[]=[]
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent;

  constructor(private productservice:ProductsService){}

  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    let limit = this.pageSize 
    let products=JSON.parse(localStorage.getItem('products') || '[]')
    if(products.length){
      let first=(this.pageSize)*(this.pageIndex)
      let second=(this.pageSize)*(this.pageIndex+1)
      products=products.slice(first,second)
      this.productservice.products.next(products)
    }
     
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
