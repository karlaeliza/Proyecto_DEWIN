import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
{path: 'login', component:LoginComponent},
{path:'dashboard', component:DashBoardComponent},
{path:'registrarse', component:RegistroComponent},
{path: '**', pathMatch:'full',redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
