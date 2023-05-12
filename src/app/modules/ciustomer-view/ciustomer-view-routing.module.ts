import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiustomerViewComponent } from './ciustomer-view.component';

const routes: Routes = [{ path: '', component: CiustomerViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiustomerViewRoutingModule { }
