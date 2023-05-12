import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminViewRoutingModule } from './admin-view-routing.module';
import { AdminViewComponent } from './admin-view.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AddProductComponent } from './pages/add-product/add-product.component';



@NgModule({
  declarations: [
    AdminViewComponent,
    PaginationComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminViewRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdminViewModule { }
