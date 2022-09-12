import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests : Array<any> = [];

  constructor() { }


  ngOnInit(): void {

 let work1 = {
    espanol: "10/10",
    ingles: "9/10",
    chino : "7/10",
    aleman : "3/10"
  };
  

  this.interests.push(work1);
  



}

}

