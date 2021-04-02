import { Component, OnInit } from '@angular/core';
import { UseServicesComponent } from '../../use-services.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSuccess: boolean;
  email = '';
  password = '';
  constructor(private serverHttp: UseServicesComponent) { }

  config: Object;

  ngOnInit(): void {
    this.serverHttp.getProfile()
    .subscribe((data) => {
      console.log(this.config = data);
      console.log(data[0]);
    })
  }

  SubmitLogin(text) {
    console.log()
    let length = 0;
    for(let item of this.config[length]) {
      if (text.email === this.config[length][0] && text.password === this.config[length][1]) {
        return this.isSuccess = true;
      }
      else {
        this.isSuccess = false;
      }
      length++;
    }
  }
}
