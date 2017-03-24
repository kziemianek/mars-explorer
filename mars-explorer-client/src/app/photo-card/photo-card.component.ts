import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from './../photo';
@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {

  @Input()
  photo: Photo;

  @Output()
  share = new EventEmitter<string>();

  defaultImg = './assets/icons/mars-ico-256.png';

  constructor() { }

  ngOnInit() {
  }

}
