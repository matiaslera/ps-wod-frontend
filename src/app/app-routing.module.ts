import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ChatComponent } from './chat/chat.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
  children: [
    {path: 'perfil', component: PerfilComponent },
    {path: 'chat/:id', component: ChatComponent },
    {path: 'presupuesto', component: PresupuestoComponent },
     ] 
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
