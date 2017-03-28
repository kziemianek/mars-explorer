import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { NasaService } from './nasa.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PhotosService {

  private photos: Photo[] = [];
  private page = 0;
  private pageSize = 12;

  photo$: Subject<Photo[]>;
  isFetching$: Subject<boolean>;

  constructor(private nasaService: NasaService) {
    this.photo$ = new Subject();
    this.isFetching$ = new Subject();
  }

  fetchNextPage(cameraCode): Promise<Photo[]> {
    this.page++;
    this.isFetching$.next(true);
    return this.fetch(this.page, this.pageSize, cameraCode).then((photos) => {
      this.photos = this.photos.concat(photos);
      this.photo$.next(this.photos);
      this.isFetching$.next(false);
      return this.photos;
    });
  }


  refetch(cameraCode): Promise<Photo[]> {
    this.page = 0;
    this.photo$.next([]);
    this.isFetching$.next(true);
    return this.fetch(this.page, this.pageSize, cameraCode).then((photos) => {
      this.photos = photos;
      this.photo$.next(this.photos);
      this.isFetching$.next(false);
      return this.photos;
    });
  }

  private fetch(page, pageSize, cameraCode: string): Promise<Photo[]> {
    return this.nasaService.fetchPhotos(page, pageSize, cameraCode);
  }


}
