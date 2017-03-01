import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mex, the mars explorer';
  photos: Photo[] = [];
  page = 0;
  pageSize = 10;
  constructor(private nasaService: NasaService) {

  }

  ngOnInit() {
    this.fetchPhotos(this.page, this.pageSize);
  }

  fetchNextPhotos() {
    this.page++;
    this.fetchPhotos(this.page, this.pageSize);
  }

  private fetchPhotos(page, pageSize) {
    this.nasaService.fetchPhotos(page, pageSize).then((photos) => {
      this.photos = this.photos.concat(photos);
    })
  }
}
