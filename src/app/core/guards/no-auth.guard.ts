import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  let role =localStorage.getItem('role');
  const router = inject(Router);
  if(role === 'admin'){
   router.navigateByUrl('/dashboard')
    return false
  }else if(role === 'user'){
    router.navigateByUrl('/home')
    return false
  }else{
    return true
  }
};
