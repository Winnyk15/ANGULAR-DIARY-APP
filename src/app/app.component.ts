import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Diary:string[];

  constructor(){
    this.Diary = ['Beautiful sunsets need cloudy skies', 'Positive anything is better than negative nothing', 'No reason to stay is a good reason to go']
  }
}
