import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router,private auth:AuthService){}
  logOut(){
    localStorage.clear();
    this.auth.isloggedIn$.next(false);
    this.router.navigateByUrl('./login')
  }
}
