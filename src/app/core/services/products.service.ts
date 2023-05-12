import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products=new BehaviorSubject<Product[]>([])

  constructor(private http:HttpClient) {
    let products= localStorage.getItem('products')
    if(products){
     this.products.next(JSON.parse(localStorage.getItem('products')  || '[]'))
     }
   }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  getPrdouct(id:ParamMap){
    return this.http.get(`https://fakestoreapi.com/products/`+ id)
  }

  updateProduct(data:Product){
    return this.http.patch(`https://fakestoreapi.com/products/${data.id}`,data)
  }

  deleteProduct(id:number){
    return this.http.delete(`https://fakestoreapi.com/products/${id}`)
  }

  addProduct(data:Product){
    return this.http.post(`https://fakestoreapi.com/products`,data)
  }

  getCategories(){
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }
  getProductsInEachCategry(category:string){
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
  }

  getNumberOfProducts(limit:number){
    return this.http.get<Product[]>(`https://fakestoreapi.com/products?limit=${limit}`)
  }
}
