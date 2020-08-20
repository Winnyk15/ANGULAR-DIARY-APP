import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';


@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  Diaries:Diary[] = [
    {id:1, name:'Beautiful sunsets need cloudy skies',description:'Suffering comes first before success'},
    {id:2,name:'Positive anything is better than negative nothing',description:'It is better to be positive at doing small things than staying negative and being dormant'},
    {id:3,name:'No reason to stay is a good reason to go',description:'If you have no reason to stay then better walk away'},
    {id:4,name:'One friend can change your whole life',description:'The person you call a friend can impact your life positively or negatively'},
    {id:5,name:'Do not call it a dream but a plan',description:'Do not let it remain a dream but rather make a plan and reach the goal'},
    {id:6,name:'Making mistakes is better than faking perfection',description:'Learning from mistakes is better than pretending you are aware of something'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
