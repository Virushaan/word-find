import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListService } from '../services/list.service';
import { WordListComponent } from './word-list.component';

describe('WordList removeWord', () => {
  it('should remove item from list', () => {
    let testService;
    let component = new WordListComponent(testService);
    component.words = ["word1"];
    component.removeWord("word1")
    expect(component.words.length).toBe(0);
  })

})
