import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from './../photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {

  @Input()
  photos: Photo[];
  private offset = 100;

  @Output()
  fetchNextPhotos = new EventEmitter();

  constructor() { }

}