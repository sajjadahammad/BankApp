import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  dataBase:any={
    101:{acno:101,uname:"sajjad",password:1000,balance:50000}
   } 

  constructor() {
   }

   storedataDB(){
    localStorage.setItem("storage db",JSON.stringify(this.dataBase))
  }
    
  register(acno:any,name:any,pswd:any,balance:any){
    if(acno in this.dataBase){
      return false
    }else{
      this.dataBase[acno]={
        accno:acno,
        password:pswd,
        uname:name,
        balance:0
      }
        this.storedataDB()
      return true
    }
  }

  signin(accno:any,pswd:any){
    if(accno in this.dataBase){
      if(pswd==this.dataBase[accno]['password']){
        console.log("Found")
        return true
      }else{
        return false
      }
    }else{
      
      return false
      
    }
  }
}
