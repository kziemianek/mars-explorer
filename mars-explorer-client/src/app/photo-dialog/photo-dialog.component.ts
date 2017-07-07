import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';
import { MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.css']
})
export class PhotoDialogComponent implements OnInit {

  photo: Photo;

  constructor(private mdDialogRef: MdDialogRef<any>, private config: MdDialogConfig) {
    this.photo = config.data.photo;
  }

  ngOnInit() {
  }

}
