import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { UIFormComponent } from './form.component'
import { BenefitsComponent } from './tabs/benefits.component';
import { FundsComponent } from './tabs/funds.component';
import { QuotesComponent } from './tabs/quotes.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
 { path:'formControlEx' , component: UIFormComponent},
 { path:'benefits' , component: BenefitsComponent},
 { path:'quotes' , component: QuotesComponent},
 { path:'funds' , component: FundsComponent},
 { path:'popup',  component:DialogComponent}
];


//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
