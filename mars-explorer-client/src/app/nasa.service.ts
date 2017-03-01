import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Photo } from './photo';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class NasaService {

  PHOTOS_URL: string = '/photos';

  constructor(private http: Http) { }

  fetchPhotos(page, pageSize): Promise<Photo[]> {
    let search: URLSearchParams = new URLSearchParams();
    search.set('page', page);
    search.set('pageSize', pageSize);
    return this.http.get(this.PHOTOS_URL, { search }).toPromise().then(response => {
      return response.json().map(photo => {
        return {
          'id': photo.id,
          'sol': photo.sol,
          'cameraName': photo.camera.name,
          'imgSrc': photo.img_src,
          roverName: photo.rover.name,
          earthDate: photo.earth_date
        };
      })
    })
  }

}
