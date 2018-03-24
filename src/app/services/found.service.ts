import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FoundService {
  private found = new BehaviorSubject<{word:string, start:string, end:string, isValid:boolean}[]>([{
    word: "",
    start: "",
    end: "",
    isValid: false
  }]);
  cast = this.found.asObservable();
  constructor() { }

  editFound(newFound){
    this.found.next(newFound);
  }
}
