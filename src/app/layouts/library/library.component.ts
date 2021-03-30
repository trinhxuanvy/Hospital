import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-news',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customNews: OwlOptions = {
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
        items: 3,
      }
    },
    nav: true
  }
}
