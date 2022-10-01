import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  // regUserName
  // regAccountNumber
  // regPassword
  storagedb:any

  registerForm = this.fb.group({
    regUserName:['',[Validators.required,Validators.pattern('[a-z A-z]*')]],
    regAccountNumber:[''],
    regPassword:['']
  })

  loginForm = this.fb.group({
    accountNumber:['',[Validators.required,Validators.pattern('[0-9]*')]],
    passWord:[''],
  })
  // dataBase:any={
  //   101:{acno:101,uname:"sajjad",password:1000,balance:50000}
  //  } 

  constructor(private router:Router,
              private db:DatabaseService,
              private fb:FormBuilder) { 
              }

  ngOnInit(): void {
  }

  // accountNumberChange(event:any){
  //   this.accountNumber=event.target.value
  //   console.log("this.accountNumberChange",this.accountNumber)
  // }

  // passwordChange(event:any){
  //   this.passWord=event.target.value
  //   console.log("this.passWord",this.passWord)
  // }
   
  login(){
    console.log("Login Form",this.loginForm)
    var lacno:any=this.loginForm.value.accountNumber
    var lpswd:any=this.loginForm.value.passWord
     
     if(this.loginForm.valid){
      console.log(this.db.dataBase)
      const results=this.db.signin(lacno,lpswd)
      console.log("Data: ",lacno,lpswd)
      // if(acno in this.dataBase){
        if(results){
          alert("login success")
          this.router.navigateByUrl('dashboard')
        }else{
          alert("Incorrect password or username Login failed")
        }  
     }
     else{
      alert("invalid")
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

//signup() in 2 way binding
  // let data=this.db.dataBase
  // console.log("test",data)
  // const result = this.db.register(this.regAccountNumber,this.regUserName,this.regPassword,0)
  // console.log(data)
  // if(result){
  //   alert("Registerd successfully")
  //   // this.router.navigateByUrl('')
  // }else{
  //   alert("Registration failed")
  // }

signUp(){
  console.log("Register Form",this.registerForm)
  var name:any = this.registerForm.value.regUserName
  var acno:any = this.registerForm.value.regAccountNumber
  var pswd:any = this.registerForm.value.regPassword
  
  if(this.registerForm.valid){
    console.log(this.db.dataBase)
    let result = this.db.register(acno,name,pswd,0)
    console.log("Data: ",name,acno,pswd)
    if(result){
      alert("Successfully Registered")
      console.log(this.db.dataBase)
    }else{
      alert("Failed to Register")
    }
  }else{
    alert("Invalid")
  }
}
}
