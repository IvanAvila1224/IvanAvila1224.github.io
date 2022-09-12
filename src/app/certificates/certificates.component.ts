import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates : Array<any> = [];

  constructor() { }


  ngOnInit(): void {

 let work1 = {
    fecha : "2016-2019",
    ubicacion : "fortin ",
    instituto : "cetis 143",
    certificado : "certificado de estudios",
    

  };
  let work2 = {
    fecha : "2015-2017",
    ubicacion : "coscomatepec",
    instituto : "INTEC",
    certificado : "certificado en informatica",
    
  };

  let work3 = {
    fecha : "2020-2021",
    ubicacion : "fortin",
    instituto : "DIF",
    certificado : "Certificado en electricidad",
    
  };

  this.certificates.push(work1);
  this.certificates.push(work2);
  this.certificates.push(work3);



}

}
