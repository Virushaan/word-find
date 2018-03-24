import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WordsService {

  private grid = new BehaviorSubject<string>('');
  cast = this.grid.asObservable();

  constructor() { }

  editGrid(newGrid){
    this.grid.next(newGrid);
  }


}
