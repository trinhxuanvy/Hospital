import { Component, OnInit } from '@angular/core';
import { AppData } from '../../data';
import { Router } from '@angular/router';
import { UseServicesComponent } from '../../use-services.component';

@Component({
  selector: 'app-set-up-time',
  templateUrl: './set-up-time.component.html',
  styleUrls: ['./set-up-time.component.css']
})
export class SetUpTimeComponent implements OnInit {
  data = new AppData('','','','','','','','');
  config: Object;

  constructor(
    private router: Router,
    private serverHttp: UseServicesComponent) { }

  ngOnInit(): void {
    this.serverHttp.getProfile()
      .subscribe((data) => {
        console.log(this.config = data);
        console.log(data[0]);
      })

    if(sessionStorage.getItem('isLogin') == 'true') {
      this.router.navigate(['dat-lich-hen']);
    }
    else {
      this.router.navigate(['dang-nhap']);
    }
  }


  SubmitSetUpTime(text) {
    console.log(text);
  }

}
