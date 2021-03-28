import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-service-hot',
  templateUrl: './service-hot.component.html',
  styleUrls: ['./service-hot.component.css']
})
export class ServiceHotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customServiceHot: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    margin: 24,
    stagePadding: 10,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2,
        margin: 12
      },
      600: {
        items: 2,
        margin: 12
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      }
    },
    nav: true
  }
}
