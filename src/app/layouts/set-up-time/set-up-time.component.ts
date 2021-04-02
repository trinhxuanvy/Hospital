import { Component, OnInit } from '@angular/core';
import { AppData } from '../../data';

@Component({
  selector: 'app-set-up-time',
  templateUrl: './set-up-time.component.html',
  styleUrls: ['./set-up-time.component.css']
})
export class SetUpTimeComponent implements OnInit {
  data = new AppData('','','','','','','','');
  constructor() { }

  ngOnInit(): void {
  }

  SubmitSetUpTime(text) {
    console.log(text)
  }

}
