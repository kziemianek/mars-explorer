import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { NasaService} from './nasa.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PhotosService {

  private photos: Photo[] = [];
  private page = 0;
  private pageSize = 12;

  photo$: Subject<Photo[]>;

  constructor( private nasaService:NasaService) {
    this.photo$ = new Subject();
   }

  fetchNextPage(cameraCode): Promise<Photo[]> {
    this.page++;
    return this.fetch(this.page, this.pageSize, cameraCode).then((photos) => {
      this.photos = this.photos.concat(photos);
      this.photo$.next(this.photos);
      return this.photos;
    });
  }


  refetch(cameraCode): Promise<Photo[]> {
    this.page = 0;
    return this.fetch(this.page, this.pageSize, cameraCode).then((photos) => {
      this.photos = photos;
      this.photo$.next(this.photos);
      return this.photos;
    });
  }

  private fetch(page, pageSize, cameraCode: string): Promise<Photo[]> {
    return this.nasaService.fetchPhotos(page, pageSize, cameraCode);
  }


}
