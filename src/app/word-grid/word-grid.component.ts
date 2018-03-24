import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';


@Component({
  selector: 'app-word-grid',
  templateUrl: './word-grid.component.html',
  styleUrls: ['./word-grid.component.css']
})
export class WordGridComponent implements OnInit {
  grid:string;
  editGrid: string;

  constructor(private gridService:WordsService) { }

  editTheGrid(){
    this.gridService.editGrid(this.editGrid);
  }

  ngOnInit() {
    this.gridService.cast.subscribe(grid => this.grid = grid)
  }

}
