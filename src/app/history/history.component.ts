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
    this.acntnum = datab[datastore]['accno']
    console.log(datab[datastore]['accno'])
    this.name = datab[datastore]['name']
    this.balance = datab[datastore]['balance']
  }

}
