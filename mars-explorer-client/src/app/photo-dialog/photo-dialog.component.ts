import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.css']
})
export class PhotoDialogComponent implements OnInit {

  photo: Photo;

  constructor(private mdDialogRef: MdDialogRef<any>) {
    this.photo = mdDialogRef.config.data.photo;
  }

  ngOnInit() {
  }

}
