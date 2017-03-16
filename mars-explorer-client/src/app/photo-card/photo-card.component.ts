import { Component, OnInit, Input } from '@angular/core';
import { Photo } from './../photo';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {

  @Input()
  photo: Photo;

  defaultImg = './assets/icons/mars-ico-256.png';

  constructor() { }

  ngOnInit() {
  }

  share(imgUrl) {
    window.open(`http://www.facebook.com/sharer.php?u=${imgUrl}`, "", 'width=626,height=436');
  }

}
