import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-and-competences',
  templateUrl: './education-and-competences.component.html',
  styleUrls: ['./education-and-competences.component.css']
})
export class EducationAndCompetencesComponent implements OnInit {

  education : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  

  let work1 = {
    fecha : "2016-2019",
    ubicacion : "Carretera Fortin",
    puesto : "estudiante",
    escuela : "cetis 143",
    logros : [
      {descripcion: "Carrera tecnica en Ofimatica "},
      
    ]

  };
  let work2 = {
    fecha : "2015-2017",
    ubicacion : "Coscomatepec",
    puesto : "estudiante",
    escuela : "INTEC",
    logros : [
      {descripcion: "Carrera tecnica en informatica"},
      
    ]
  };

  this.education.push(work1);
  this.education.push(work2);

  }


}



