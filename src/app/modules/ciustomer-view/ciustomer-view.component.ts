import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-ciustomer-view',
  templateUrl: './ciustomer-view.component.html',
  styleUrls: ['./ciustomer-view.component.scss']
})
export class CiustomerViewComponent implements OnInit {
  categories:string[]=[]
  constructor(private productService:ProductsService){

  }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((res:string[])=>{
      this.categories=res
    })
  }
}
