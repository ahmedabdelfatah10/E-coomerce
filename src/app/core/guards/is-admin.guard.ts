import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  let role =localStorage.getItem('role');
  const router = inject(Router);
  if(!role || role !== 'admin'){
   router.navigateByUrl('/login')
    return false
  }else{
    return true
  }
};
