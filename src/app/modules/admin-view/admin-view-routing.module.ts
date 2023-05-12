import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [{ path: '', component: AdminViewComponent },
        {path:'product/:id',component:ProductDetailsComponent},
        {path:'add-product',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule { }
