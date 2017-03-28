import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Photo } from './photo';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class NasaService {

  PHOTOS_URL: string = 'api/photos';

  constructor(private http: Http) { }

  fetchPhotos(page, pageSize, cameraCode: string): Promise<Photo[]> {
    let search: URLSearchParams = new URLSearchParams();
    search.set('page', page);
    search.set('pageSize', pageSize);

    if(cameraCode) {
      search.set('camera', cameraCode);
    }

    return this.http.get(this.PHOTOS_URL, { search }).toPromise().then(response => {
      return response.json()
    })
  }

}
