import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  name:any
  acno:any
  pan:any
  aadhar:any
  salary:any
  database:any={
    
  }
  constructor() { }

  ngOnInit(): void {
  }

  SubmitCreditCard(){
    this.database[this.acno]={
      name:this.name,
      acno:this.acno,
      pan:this.pan,
      aadhar:this.aadhar,
      salary:this.salary,
    }
    console.log("DATABASE",this.database)
  }
}