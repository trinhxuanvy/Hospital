import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email = '';
  isEmail = true;

  constructor() { }

  ngOnInit(): void {
  }

  SubmitEmail(text) {
    return '@'.concat(text.value) ? this.isEmail = true : this.isEmail = false;
  }
}
