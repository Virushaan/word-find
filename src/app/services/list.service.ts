import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ListService {
  private words = new BehaviorSubject<string[]>([]);
  cast = this.words.asObservable();

  constructor() { }

  editWords(newWords){
    this.words.next(newWords);
  }

}
