import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isloggedIn$=new BehaviorSubject<boolean>(false)
  constructor() { 
    let role =localStorage.getItem('role');
    if(role === 'admin' || role === 'user'){
      this.isloggedIn$.next(true);
    }
  }
}
