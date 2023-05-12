import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiustomerViewRoutingModule } from './ciustomer-view-routing.module';
import { CiustomerViewComponent } from './ciustomer-view.component';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CategoryComponent } from './components/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CiustomerViewComponent,
    CardComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CiustomerViewRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
   MatButtonModule
  ]
})
export class CiustomerViewModule { }
