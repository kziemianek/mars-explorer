import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../filters.service';
import { PhotosService} from '../photos.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-filters-dialog',
  templateUrl: './filters-dialog.component.html',
  styleUrls: ['./filters-dialog.component.css']
})
export class FiltersDialogComponent implements OnInit {


  cameraCode: string;


  cameras = [
    {
      code : 'FHAZ',
      name : 'Front Hazard Avoidance Camera'
    },
    {
      code : 'RHAZ',
      name : 'Rear Hazard Avoidance Camera'
    },
    {
      code : 'MAST',
      name : 'Mast Camera'
    },
    {
      code : 'CHEMCAM',
      name : 'Chemistry and Camera Complex'
    },
    {
      code : 'MAHLI',
      name : 'Mars Hand Lens Imager'
    },
    {
      code : 'MARDI',
      name : 'Mars Descent Imager'
    },
    {
      code : 'NAVCAM',
      name : 'Navigation Camera'
    }
  ]

  constructor(public filtersService: FiltersService, private photosService: PhotosService, private mdDialogRef: MdDialogRef<any>) { }

  ngOnInit() {
  }

  apply() {
    this.photosService.refetch(this.filtersService.cameraCode);
    this.mdDialogRef.close();
  }

}
