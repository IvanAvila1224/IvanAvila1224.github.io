import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenguages',
  templateUrl: './lenguages.component.html',
  styleUrls: ['./lenguages.component.css']
})
export class LenguagesComponent implements OnInit {

  lenguages : Array<any> = [];

  constructor() { }


  ngOnInit(): void {

 let work1 = {
    español: "10/10",
    ingles: "9/10",
    chino : "7/10",
    aleman : "3/10"
  };
  

  this.lenguages.push(work1);
  



}

}
