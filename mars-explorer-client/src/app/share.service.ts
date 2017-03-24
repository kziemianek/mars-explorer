import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  constructor() { }

  facebookShare(imgUrl:string) {
    window.open(`http://www.facebook.com/sharer.php?u=${imgUrl}`, "", 'width=626,height=436');
  }

}
