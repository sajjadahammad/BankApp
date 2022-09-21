import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ent="Enter your account number"
  stat="Welcome to Axis Bank"
  regUserName:any
  regAccountNumber:any
  regPassword:any
  storagedb:any

  accountNumber:number=0
  passWord:string=''
  dataBase:any={
    101:{acno:101,uname:"sajjad",password:1000,balance:50000}
   } 

  constructor(private router:Router,
    private db:DatabaseService) { }

  ngOnInit(): void {
  }

  accountNumberChange(event:any){
    this.accountNumber=event.target.value
    console.log("this.accountNumberChange",this.accountNumber)
  }

  passwordChange(event:any){
    this.passWord=event.target.value
    console.log("this.passWord",this.passWord)
  }
   
  login(){
    const results=this.db.signin(this.accountNumber,this.passWord)
    // if(acno in this.dataBase){
      if(results){
        alert("login success")
        this.router.navigateByUrl('dashboard')
      }else{
        alert("Incorrect password or username Login failed")
      }
    }
  //  else{
  //   alert("Incorrect Account Number")
  // }
 // }

// userNameChange(event:any){
//   this.regUserName=event.target.value
//   console.log("Reguname: ",this.regUserName)
// }

// regAcntNumChange(event:any){
//   this.regAccountNumber=event.target.value
//   console.log("Regaccntnum: ",this.regAccountNumber)
// }

// regPswdChange(event:any){
//  this.regPassword=event.target.value
//  console.log("Regpswd: ",this.regPassword)
// }

signUp(){
  let data=this.db.dataBase
  console.log("test",data)
  const result = this.db.register(this.regAccountNumber,this.regUserName,this.regPassword,0)
  console.log(data)
  if(result){
    alert("Registerd successfully")
    // this.router.navigateByUrl('')
  }else{
    alert("Registration failed")
  }
}
}
