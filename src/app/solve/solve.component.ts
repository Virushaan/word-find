import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';
import { ListService } from '../services/list.service';
import { FoundService } from '../services/found.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {
  grid:string;
  newGrid:string[];
  finalGrid:string[][] = [];
  words:string[];
  finalWords: Array<{word:string, start:string, end:string, isValid:boolean}> = [];
  constructor(private gridService:WordsService, private listService:ListService,
  private foundService:FoundService) { }

  findSolution(){
    this.createGrid();
    for(let i = 0; i<this.words.length; i++){
      let returnedWord = this.findWord(this.words[i]);
      this.finalWords.push(returnedWord);
    }
    this.foundService.editFound(this.finalWords);
    console.log(this.finalWords);
  }

  //converts textarea into matrix
  createGrid(){
    this.newGrid = this.grid.split("\n");
    for(let i =0; i<this.newGrid.length; i++){
      this.finalGrid[i] = this.newGrid[i].split(" ");
    }
  }

  
  findWord(word:string){
    let returnedWord: {word:string, start:string, end:string, isValid:boolean};
    for(let y=0; y<this.finalGrid.length; y++){
      for(let x=0; x<this.finalGrid[y].length; x++){

        if (this.finalGrid[y][x] == word[0]){

          //check if word is forward
          if ((x + word.length -1)<this.finalGrid[y].length){
            returnedWord = this.findWordRight(word,x,y);
            if(returnedWord.isValid){

              return returnedWord;
            }
          }

          //check is word is backwards
          if (x-word.length+1 >= 0){
            returnedWord = this.findWordLeft(word,x,y);
            if (returnedWord.isValid){
              return returnedWord;
            }
          }

          //check is word is downwards
          if(y+word.length-1 < this.finalGrid.length){
            returnedWord = this.findWordDown(word,x,y);
            if (returnedWord.isValid){
              return returnedWord;
            }
          }

          //check if word is upwards
          if(y-word.length+1 >= 0){
            returnedWord = this.findWordUp(word,x,y)
            if (returnedWord.isValid){
              return returnedWord;
            }
          }
        }

      }
    }
    returnedWord = {word: word, start:"-", end:"-", isValid:false};
    return returnedWord;
  }
  findWordRight(word, x, y){
    let isValid = true;
    for(let i=0; i<word.length; i++){
      if (word[i] != this.finalGrid[y][x+i]){
        isValid = false;
      }
    }
    if (isValid){
      let start = "(" + String(x+1) + ", " + String(y+1) + ")";
      let end = "(" + String(x+word.length) + ", " + String(y+1) + ")";
      var finalWord = {word: word, start: start, end: end, isValid: isValid};
    } else {
      let start = "-";
      let end = "-";
      var finalWord = {word: word, start: start, end: end, isValid: isValid};
    };
    return finalWord;
  }

  findWordLeft(word, x, y){
    let isValid = true;
    for(let i=0; i<word.length; i++){
      if (word[i] != this.finalGrid[y][x-i]){
        isValid = false;
      }
    }
    if (isValid){
      let start = "(" + String(x+1) + ", " + String(y+1) + ")";
      let end = "(" + String(x-word.length+2) + ", " + String(y+1) + ")";
      var finalWord = {word: word, start: start, end: end, isValid: isValid};
    } else {
      let start = "-";
      let end = "-";
      var finalWord = {word: word, start: start, end: end, isValid: isValid};
    };
    return finalWord;
  }

  findWordDown(word, x, y){
    let isValid = true;
    for(let i=0; i<word.length; i++){
      if (word[i] != this.finalGrid[y+i][x]){
        isValid = false;
      }
    }
    if (isValid){
      let start = "(" + String(x+1) + ", " + String(y+1) + ")";
      let end = "(" + String(x+1) + ", " + String(y+word.length) + ")";
      var finalWord = {word: word, start: start, end: end, isValid: isValid};
    } else {
      let start = "-";
      let end = "-";
      var finalWord = {word: word, start: start, end: end, isValid: isValid};
    };
    return finalWord;
  }

  findWordUp(word, x, y){
    let isValid = true;
    for(let i=0; i<word.length; i++){
      if (word[i] != this.finalGrid[y-i][x]){
        isValid = false;
      }
    }
    if (isValid){
      let start = "(" + String(x+1) + ", " + String(y+1) + ")";
      let end = "(" + String(x+1) + ", " + String(y-word.length+2) + ")";
      var finalWord = {word: word, start: start, end: end, isValid: isValid};
    } else {
      let start = "-";
      let end = "-";
      var finalWord = {word: word, start: start, end: end, isValid: isValid};
    };
    return finalWord;
  }


  ngOnInit() {
    this.gridService.cast.subscribe(grid => this.grid = grid);
    this.listService.cast.subscribe(words => this.words = words);
  }

}
