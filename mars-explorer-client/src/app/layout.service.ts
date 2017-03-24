import { Injectable } from '@angular/core';

const GRID_MODE = 'GRID';
const LIST_MODE = 'LIST';

@Injectable()
export class LayoutService {

  private viewMode:string;

  constructor() { 
    this.viewMode = GRID_MODE;
  }

  isListView(): boolean {
    return this.viewMode === LIST_MODE;
  }

  isGridView(): boolean {
    return this.viewMode === GRID_MODE;
  }

  switchToGrid() {
    this.viewMode = GRID_MODE;
  }

  switchToList() {
    this.viewMode = LIST_MODE;
  }

}
