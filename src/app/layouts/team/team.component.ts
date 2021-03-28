import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customTeam: OwlOptions = {
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

  obj = [
    {id: 1, name: 'Ths BS Nguyễn Trần Quốc Hoàng', image: '../../../assets/images/01-ThS-BS-Nguyễn-Trần-Quốc-Hoàng-scaled-e1597755650514-230x230.jpg', position: 'Giám đốc bệnh viện', workplace: 'Bệnh viện Đa Khoa Mắt Sài Gòn'},
    {id: 2, name: 'BS CKII Nguyễn Nam Trung', image: '../../../assets/images/01A-BSCKII-Nguyễn-Nam-Trung-scaled-e1596169157460-230x230.jpg', position: 'Giám đốc bệnh viện', workplace: 'Bệnh viện Mắt Sài Gòn Nha Trang'},
    {id: 3, name: 'BS CKII Trần Thị Hồng Tường', image: '../../../assets/images/AG4A3420-scaled-e1598948508182-230x230.jpg', position: 'Trưởng khoa phẫu thuật khúc xạ', workplace: 'Bệnh viện Đa Khoa Mắt Sài Gòn'},
    {id: 4, name: 'Ths BS Lưu Hồng Ngọc', image: '../../../assets/images/IMG_8677-e1616476148285-230x230.png', position: 'Trưởng khoa khám bệnh', workplace: 'Bệnh viện Mắt Sài Gòn - Hà Nội I'},
    {id: 5, name: 'BS Nguyễn Ngọc Nguyên', image: '../../../assets/images/04A-BS-Nguyễn-Ngọc-Nguyên-scaled-e1596168963830-230x230.jpg', position: 'Trưởng khoa Khám', workplace: 'Bệnh viện Mắt Sài Gòn Hà Nội'},
    {id: 6, name: 'BS Nguyễn Đức Long', image: '../../../assets/images/AG4A4122-scaled-e1598949927366-230x230.jpg', position: 'Trưởng khoa TMH - Phó khoa PTTM', workplace: 'Bệnh viện Đa Khoa Mắt Sài Gòn'},
    {id: 7, name: 'BS NT Lê Thục Nhi', image: '../../../assets/images/AG4A3614-copy-scaled-e1598949758165-230x230.jpg', position: 'Trưởng khoa mắt tổng hợp', workplace: 'Bệnh viện Đa Khoa Mắt Sài Gòn'},
    {id: 8, name: 'BS CKII Lê Duy Công', image: '../../../assets/images/AG4A3113-scaled-e1598948344512-230x230.jpg', position: 'Phó giám đốc chuyên môn', workplace: 'Bệnh viện Mắt Sài Gòn Vinh'},
  ];
}
