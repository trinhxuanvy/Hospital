import { Component, OnInit, ElementRef } from '@angular/core';
import { SetUp } from '../../setup';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isClick = false;
  config: Object;

  constructor(
    private elRf: ElementRef,
    private setUp: SetUp,
    ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('isLogin') == 'true') {
      this.setUp.SetDisPlay('content-login', 'block');
      this.setUp.SetDisPlay('content-logout', 'none');
      this.setUp.SetImage('image-user', sessionStorage.getItem('image'));
    }
    else {
      this.setUp.SetDisPlay('content-login', 'none');
      this.setUp.SetDisPlay('content-logout', 'block');
      this.setUp.SetImage('image-user', 'no-user.jpg')
    }
  }

  LogOut() {
    this.setUp.SetDisPlay('content-login', 'none');
    this.setUp.SetDisPlay('content-logout', 'block');
    this.setUp.SetImage('image-user', 'no-user.jpg')
    sessionStorage.removeItem('isLogin');
  }

  ShowUser() {
    return this.isClick == true ? this.isClick = false : this.isClick = true;
  }
}
