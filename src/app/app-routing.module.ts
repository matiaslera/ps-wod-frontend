import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ChatComponent } from './chat/chat.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { TrabajoPendienteComponent } from './trabajo-pendiente/trabajo-pendiente.component';
import { TrabajoTerminadoComponent } from './trabajo-terminado/trabajo-terminado.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobAnswerComponent } from './job-answer/job-answer.component';
import { ContratarComponent } from './contratar/contratar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
  children: [
    {path: 'perfil/:id', component: PerfilComponent },
    {path: 'chat/:id', component: ChatComponent },
    {path: 'presupuesto', component: PresupuestoComponent },
    {path: 'trabajoPendiente', component: TrabajoPendienteComponent},
    {path: 'trabajoTerminado', component: TrabajoTerminadoComponent},
    {path: 'jobDetails/:id', component: JobDetailsComponent},
    {path: 'jobAnswer/:id', component: JobAnswerComponent},
    {path: 'contrato', component: ContratarComponent},
    { path: '', redirectTo: 'presupuesto', pathMatch: 'full' },
     ] 
},
{ path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
