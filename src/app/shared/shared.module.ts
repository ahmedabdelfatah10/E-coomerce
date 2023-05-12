import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent,
    HeaderComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
