import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from './../photo';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { PhotoDialogComponent } from './../photo-dialog/photo-dialog.component';
@Component({
  selector: 'app-photo-row',
  templateUrl: './photo-row.component.html',
  styleUrls: ['./photo-row.component.css']
})
export class PhotoRowComponent implements OnInit {

  @Input()
  photo: Photo;

  @Output()
  share = new EventEmitter<string>();

  defaultImg = './assets/icons/mars-ico-256.png';


  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openPreview() {
    let config = new MdDialogConfig();
    config.data = {
      photo: this.photo
    }
    let dialogRef = this.dialog.open(PhotoDialogComponent, config);
  }

}
