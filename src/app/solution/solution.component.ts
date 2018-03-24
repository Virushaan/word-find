import { Component, OnInit } from '@angular/core';
import { FoundService } from '../services/found.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  finalWords: Array<{word:string, start:string, end:string, isValid:boolean}> = [];
  
  constructor(private foundService:FoundService) { }

  ngOnInit() {
    this.foundService.cast.subscribe(finalWords => this.finalWords = finalWords);
  }

}
