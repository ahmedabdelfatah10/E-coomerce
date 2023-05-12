import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAdminGuard } from './core/guards/is-admin.guard';
import { isUserGuard } from './core/guards/is-user.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
      canActivate:[noAuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/admin-view/admin-view.module').then(
        (m) => m.AdminViewModule
      ),
      canActivate:[isAdminGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/ciustomer-view/ciustomer-view.module').then(
        (m) => m.CiustomerViewModule
      ),
      canActivate:[isUserGuard]
  },
  {
    path:'**',
  redirectTo:'login'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
