import { Component, OnInit, ElementRef } from '@angular/core';
import { UseServicesComponent } from '../../use-services.component';
import { Router } from '@angular/router';
import { ILogin } from '../../ILogin';
import { SetUp } from '../../setup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    private serverHttp: UseServicesComponent,
    private elRef: ElementRef,
    private router: Router,
    private setUp: SetUp) { }

  config: Object;

  ngOnInit(): void {
    this.serverHttp.getProfile()
      .subscribe((data) => {
        this.config = data;
      })
  }

  SubmitLogin(text) {
    for (let item in this.config) {
      if (text.email === this.config[item][0] && text.password === this.config[item][1]) {
        sessionStorage.setItem('isLogin', 'true');
        sessionStorage.setItem('image', this.config[item][2]);
        this.router.navigate(['dat-lich-hen']);
        this.setUp.SetDisPlay('content-login', 'block');
        this.setUp.SetDisPlay('content-logout', 'none');
        this.setUp.SetImage('image-user', this.config[item][2]);
        return true;
      }
    }
  }
}
