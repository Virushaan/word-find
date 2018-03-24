import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  words = []
  word;


  constructor(private listService:ListService) { }

  ngOnInit() {

  }

  onClick(){
    this.words.push(this.word);
    this.word = "";
    this.listService.editWords(this.words);
  }



  removeWord(word){
    var index = this.words.indexOf(word);
    this.words.splice(index, 1);
  }


}
