import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-and-competences',
  templateUrl: './skills-and-competences.component.html',
  styleUrls: ['./skills-and-competences.component.css']
})
export class SkillsAndCompetencesComponent implements OnInit {

  skills : Array<any> = [];

  constructor() { }


  ngOnInit(): void {

 let work1 = {
    capacidad: "9/10",
    organizacion : "9/10",
    responsabilidad: "10/10",
    autonomia : "10/10",
    inovacion :  "9/10",
    iniciativa : "9/10",
    experiencia : "4/10"


      

  };
  

  this.skills.push(work1);
  



}

}
