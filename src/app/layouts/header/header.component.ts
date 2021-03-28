import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggle = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleBar() {
    return this.isToggle ? this.isToggle = false : this.isToggle = true;
  }
}
