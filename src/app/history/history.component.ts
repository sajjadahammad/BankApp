import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  acntnum:any
  name:any
  balance:any

  constructor(private db:DatabaseService) { }

  ngOnInit(): void {
    var datab = this.db.dataBase
    console.log(datab)
    var datastore:any=localStorage.getItem('accountnumber')
    console.log("local: ",datastore)
    this.acntnum = datab[datastore]['acno']
    console.log(datab[datastore]['acno'])
    this.name = datab[datastore]['uname']
    console.log("NAME: ",datab[datastore].uname)
    this.balance = datab[datastore]['balance']
  }

}
