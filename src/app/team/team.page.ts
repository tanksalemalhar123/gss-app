import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  items: any[] = [
    { "name": "Phani Kumar", "designation": "Managing Director","imageUrl":"phani.jpg"},
    { "name": "Vasavi", "designation": "Director", "imageUrl": "vasavi.jpg" },
    { "name": "Kirnamayi", "designation": "CTO", "imageUrl": "kiranmayi.jpg" },
    { "name": "Bhavani", "designation": "Team Manager", "imageUrl": "bhavani.jpg" }];

  constructor() { }

  ngOnInit() {
  }

  
}
