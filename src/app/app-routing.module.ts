import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdComponent } from './prod/prod.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'prod', component: ProdComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
