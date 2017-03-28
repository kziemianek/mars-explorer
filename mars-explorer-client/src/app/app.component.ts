import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { NasaService } from './nasa.service';
import { LayoutService } from './layout.service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FiltersDialogComponent} from './filters-dialog/filters-dialog.component';
import { FiltersService } from './filters.service';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mex, the mars explorer';
  

  constructor(public photosService: PhotosService, public layoutService: LayoutService, private dialog: MdDialog, private filtersService: FiltersService) {

  }

  ngOnInit() {
    this.fetchPhotos( this.filtersService.cameraCode);
  }

  fetchNextPhotos() {
    this.fetchPhotos( this.filtersService.cameraCode);
  }

  openFilters() {
    this.dialog.open(FiltersDialogComponent)
  }

  private fetchPhotos(cameraCode: string) {
    this.photosService.fetchNextPage( this.filtersService.cameraCode);
  }
}
