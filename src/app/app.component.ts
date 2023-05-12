import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  isSignedIn$=new  BehaviorSubject<boolean>(false);

  

  constructor(private auth:AuthService){

  }

  ngOnInit(): void {
    this.isSignedIn$=this.auth.isloggedIn$
  }

}
