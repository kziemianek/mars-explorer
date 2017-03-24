import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoRowComponent } from './photo-row/photo-row.component';
import { NasaService } from './nasa.service';
import { LayoutService} from './layout.service';
import { ShareService } from './share.service';
import { PhotoDialogComponent } from './photo-dialog/photo-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoCardComponent,
    PhotoRowComponent,
    PhotoDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    LazyLoadImageModule,
    BrowserAnimationsModule
  ],
  providers: [NasaService, LayoutService, ShareService],
  bootstrap: [AppComponent],
  entryComponents: [PhotoDialogComponent]
})
export class AppModule { }
