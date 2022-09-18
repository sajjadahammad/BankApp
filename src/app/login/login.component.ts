import { Component, OnInit } from '@angular/core';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ent="Enter your account number"
  stat="Welcome to Axis Bank"
  regUserName:string=''
  regAccountNumber:number=0
  regPassword:string=''
  accountNumber:number=0
  passWord:string=''
  dataBase:any={
   101:[{acno:101,uname:"sajjad",password:1000,balance:50000}]
  }


  constructor() { }

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
    var acno = this.accountNumber
    var pswd = this.passWord

    if(acno in this.dataBase){
      if(pswd ==this.dataBase[acno]["password"]){
        alert("login success")
      }else{
        alert("Incorrect password Login failed")
      }
    }
   else{
    alert("Incorrect Account Number")
  }
}

userNameChange(event:any){
  this.regUserName=event.target.value
  console.log("Reguname: ",this.regUserName)
}

regAcntNumChange(event:any){
  this.regAccountNumber=event.target.value
  console.log("Regaccntnum: ",this.regAccountNumber)
}

regPswdChange(event:any){
 this.regPassword=event.target.value
 console.log("Regpswd: ",this.regPassword)
}

signUp(){
  var data={
    acno:this.regAccountNumber,
    uname:this.regUserName,
    password:this.regPassword
  }
  console.log("details",this.dataBase)

}

}
