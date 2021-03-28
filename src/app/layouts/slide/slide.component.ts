import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  ngOnInit() { }

  constructor() { }

  title = 'owl-demo';
  dynamicSlides = [
    {
      id: 1,
      src: '../../../assets/images/8fd3534f1a07d50a0a6fd0b068d78617.jpg',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: 2,
      src: '../../../assets/images/wel002.jpg',
      alt: 'Side 2',
      title: 'Side 2'
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }
}

