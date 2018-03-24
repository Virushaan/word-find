import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordGridComponent } from './word-grid/word-grid.component';
import { WordsService } from './services/words.service';
import { ListService } from './services/list.service';
import { FoundService } from './services/found.service';
import { SolutionComponent } from './solution/solution.component';
import { SolveComponent } from './solve/solve.component'

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    WordGridComponent,
    SolutionComponent,
    SolveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    WordsService,
    ListService,
    FoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
