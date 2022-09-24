import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  damnt:any
  dacnt:any
  dpswd:any
  wamnt:any
  wacnt:any
  wpswd:any

  constructor(private db:DatabaseService,private router:Router) { }

  ngOnInit(): void {
  }
  deposit(){
    let datab=this.db.dataBase
    if(this.dacnt in datab){
      console.log(this.dpswd)
      console.log("PSWD: ",datab[this.dacnt]['password'])
      if(this.dpswd == datab[this.dacnt]['password']){
        datab[this.dacnt]['balance']=Number(datab[this.dacnt]['balance'])+Number(this.damnt)
        console.log("BALANCE: ",datab)
        alert("Balance added")
        localStorage.setItem('accountnumber',this.dacnt)
        this.router.navigateByUrl('history')
      } else{
        alert("Incorrect Username or Password")
      }
    } else{
      alert("Transaction Failed")
    }
  }

  withdraw(){ 
    let datab = this.db.dataBase
    if(this.wacnt in datab){
      if(this.wpswd == datab[this.wacnt]['password']){
        datab[this.wacnt]['balance']= parseInt(datab[this.wamnt]['balance'])-parseInt(this.wamnt)

        console.log("BALANCE: ",datab[this.wacnt].password)
        alert('Balance Deducted')
        localStorage.setItem('accountnumber',this.wacnt)
        this.router.navigateByUrl('history')
      } else{
        alert("Incorrect Username or Password")
      }
    } else{
      alert("Transaction Failed")
    }
  }

}
