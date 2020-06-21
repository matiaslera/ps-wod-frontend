import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ChatComponent } from './chat/chat.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { AddPresupuestoComponent } from './add-presupuesto/add-presupuesto.component';
import { ProfileService } from './services/perfil.service';
import { PresupuestoService } from './services/presupuesto.services';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { TrabajoPendienteComponent } from './trabajo-pendiente/trabajo-pendiente.component';
import { TrabajoTerminadoComponent } from './trabajo-terminado/trabajo-terminado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    ChatComponent,
    PresupuestoComponent,
    AddPresupuestoComponent,
    TrabajoComponent,
    TrabajoPendienteComponent,
    TrabajoTerminadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [LoginService,ProfileService,PresupuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
