import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  mangaList = [
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/apotheosis-2-ping.jpg' },
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/zuski.jpg' },
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/im-the-strongest-boss.png' }
  ];
}
