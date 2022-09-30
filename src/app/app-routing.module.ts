import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'',component:LoginComponent},
  {path:'history',component:HistoryComponent},
  {path:'creditcard',component:CreditcardComponent},
  {path:'deleteaccount',component:DeleteaccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
