import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  objTop = [
    {image: '../../../assets/images/c14.png', number: 8, title: 'Bệnh viện'},
    {image: '../../../assets/images/Vector-Smart-Object-3.png', number: 51, title: 'Bác sĩ'},
    {image: '../../../assets/images/c12.png', number: 16, title: 'Năm kinh nghiệm'},
    {image: '../../../assets/images/c13.png', number: '3.2 triệu', title: 'Khách hàng'},
    {image: '../../../assets/images/c15.png', number: '240.520', title: 'Phẫu thuật thành công'},
  ]

  objBody = [
    {name: 'Lynk Lee', career: 'Ca sĩ', image: '../../../assets/images/Lynk-lee-e1614587112135.png', info: `Bị cận từ năm lớp 8 đến bây giờ đã là 20 năm Linh sống chung cùng cặp kính cận. Vì tính chất công việc, Linh phải dùng lens nhưng mắt lại bị khô. Mấy anh chị em trong nghề cũng chia sẻ rằng bác sĩ bảo không nên lạm dụng đeo lens nữa vìdễ làm xước hay rách giác mạc nên Linh cũng bắt đầu lo.  
    Thế là từ đó, Linh quyết sắp xếp lại công việc, đi xóa cận ngay và luôn.
    Qua sự giới thiệu của bạn bè trong giới đã từng mổ cận, Linh đã chọn Bệnh viện Mắt Sài Gòn và được bác sĩ trưởng khoa lasik Trương Công Minh, người có hơn 20 năm kinh nghiệm phẫu thuật với phương pháp Femto vì giác mạc của Linh mỏng. 
    Nguyện vọng có được một đôi mắt sáng khỏe đã trở thành hiện thực. Linh đã tháo kính thành công, tự tin tham gia Gương Mặt Thân Quen, rất nhiều show diễn khác của mình và quan trọng nhất là được nhìn thấy khuôn mặt yêu thương của những người hâm mộ. `},
    {name: 'Cô Hồng Vân', career: 'NSND', image: '../../../assets/images/NSND-Hồng-Vân-e1614588265320.png', info: `Tôi rất quan tâm và chăm lo cho sức khỏe đôi mắt của cả gia đình vì mẹ từng bị đục thủy tinh thể. Quãng thời gian đó tôi và các thành viên lúc nào cũng ở cạnh động viên bà để tinh thần phấn khởi. Mặc dù đã qua phẫu thuật nhưng mắt bà có hiện tượng mờ lại một thời gian sau đó. Sau khi đưa mẹ đi khám mắt và nhận được tư vấn của bác sĩ, bà nhận ra tình trạng mắt mờ còn liên quan đến các vấn đề khác như tuổi tác, độ lão. Bác sĩ Mắt Sài Gòn đã tận tình giải thích, thăm khám, đo mắt và chỉnh lại độ của mắt kính nên bây giờ mắt bà đã nhìn rõ hơn. 
    Ước mơ nhìn rõ con cháu của bà giờ đã thành sự thật. Cảm ơn Mắt Sài Gòn đã mang ánh sáng đến tuổi xế chiều của mẹ.`},
    {name: 'Lâm Quang Đặng', career: 'VĐV', image: '../../../assets/images/Quang-Nhật-e1614586722702.png', info: ` Là VĐV ở 3 môn phối hợp Bơi Đạp Chạy (Triathlon), mắt cận thị khiến tôi gặp rất nhiều khó khăn trong tập luyện lẫn thi đấu. Ở bộ môn bơi, mình phải dùng kiếng bơi cho người cận thị, tầm nhìn bị hạn chế. Với bộ môn Đạp xe ở tốc độ cao rồi chuyển sang chạy, mắt còn rất mỏi vì phải điều tiết quá mức.
    May mắn khi tháng 10/2020 vừa rồi, mình được các anh chị trong nhóm giới thiệu đến phương pháp mổ cận Relex SMILE tại Eagle Eye Centre (EEC). Lúc đó mới biết SMILE quả thực là phương pháp sinh ra dành riêng cho giới vận động viên chúng mình. Chỉ sau 3 ngày, mình có thể tập luyện và sinh hoạt bình thường. Ước mơ về 1 đôi mắt sáng khỏe giờ đã thành sự thật với mình. Hy vọng đôi mắt sáng sẽ cùng đồng hành và giúp tôi chinh phục được những thành tích mới ở bộ môn này. Cảm ơn Eagle Eye Centre.`},
    {name: 'Cô Giao Linh', career: 'Nghệ sĩ', image: '../../../assets/images/Cô-Giao-Linh-và-ông-xã-e1614588553215.png', info: `Hạnh phúc của cả hai vợ chồng ở cái tuổi thất thập cổ lai hy không gì sánh bằng một đôi mắt sáng. Được sự giới thiệu của vợ chồng nhạc sĩ Nguyễn Văn Đông – một người thầy lớn của tôi, cả tôi và ông xã đã tin tưởng lựa chọn Bệnh viện Mắt Sài Gòn để thăm khám và điều trị chứng đục thủy tinh thể cho cả hai vợ chồng. 
    Hồi giữa tháng 10, tôi đã phẫu thuật xong mắt trái. Bác sĩ cho biết trước phẫu thuật mắt trái của tôi chỉ đạt thị lực 1/10. Vào ngày 3/11, khi quay trở lại Mắt Sài Gòn, mắt trái của  tôi đã đạt 8/10, nhìn tốt, rõ. Sau khi tiến hành phẫu thuật cả mắt phải, giờ đây tôi đã có được một đôi mắt sáng.`},
  ]

  customExpTop: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    stagePadding: 10,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 2,
        margin: 12
      },
      600: {
        items: 3,
      },
      760: {
        items: 4,
      },
      1000: {
        items: 5,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
      }
    },
    nav: true
  }

  customExpBody: OwlOptions = {
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
        items: 1,
      },
      600: {
        items: 1,
      },
      760: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    },
    nav: true
  }
}
