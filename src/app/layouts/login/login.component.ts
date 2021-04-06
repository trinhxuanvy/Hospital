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
    let length = 0;
    for (let item of this.config[length]) {
      if (text.email === this.config[length][0] && text.password === this.config[length][1]) {
        sessionStorage.setItem('isLogin', 'true');
        this.router.navigate(['dat-lich-hen']);
        this.setUp.SetDisPlay('content-login', 'block');
        this.setUp.SetDisPlay('content-logout', 'none');
        this.setUp.SetImage('image-user', '../../../assets/images/AG4A3420-scaled-e1598948508182-230x230.jpg')
        return true;
      }
      length++;
    }
  }
}
