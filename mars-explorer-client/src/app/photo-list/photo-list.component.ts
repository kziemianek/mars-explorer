import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from './../photo';
import { LayoutService } from './../layout.service';
import { ShareService } from './../share.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {

  @Input()
  photos: Photo[];

  @Input()
  mode: string;

  @Output()
  fetchNextPhotos = new EventEmitter();

  constructor(public layoutService: LayoutService, private shareService: ShareService) { }

  share(imgSrc: string) {
    this.shareService.facebookShare(imgSrc);
  }
}
