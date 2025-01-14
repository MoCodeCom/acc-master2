import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProcessorsComponent } from './processors/processors.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BanksComponent } from './banks/banks.component';
import { PayoutComponent } from './payout/payout.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'processors', component:ProcessorsComponent},
  {path:'banks', component:BanksComponent},
  {path:'payout', component:PayoutComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
