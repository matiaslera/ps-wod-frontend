import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';
import { ProfileService } from '../services/perfil.service';
import { LoginService } from '../services/login.service';
import { Usuario } from '../dominio/usuario';

@Component({
  selector: 'app-trabajo-pendiente',
  templateUrl: './trabajo-pendiente.component.html',
  styleUrls: ['./trabajo-pendiente.component.css']
})
export class TrabajoPendienteComponent  {

  usuario: Usuario= new Usuario
  trabajos: Presupuesto[]=[];
  constructor(public trabajosServices: PresupuestoService,private profileService: ProfileService,private user: LoginService) {
    this.updateTrabajos()
   }

  ngOnInit():void {
  }

  async getTrabajosClientes(){
    try{
    this.trabajos=await  this.trabajosServices.consultas()
    console.log(this.trabajos)    
  } catch{
     console.log('error en cargar lista clientes')
   }
  }

  async getTrabajosTecnicos(){
    try{
      this.usuario =(await this.profileService.getProf())
      console.log(this.trabajos)    
      console.log( this.usuario)
    this.trabajos=await  this.trabajosServices.especialidad(this.usuario)
  } catch{
     console.log('error en cargar lista de tecnicos')
   }
  }

  noTieneTrabajos(){
    return this.trabajos.length ===0
  }

  updateTrabajos(){
    if(this.esProfesional()){
      console.log('es profesional: ',this.esProfesional())
      this.getTrabajosTecnicos()
    }else{     
      console.log('es cliente: ', this.esProfesional())
      this.getTrabajosClientes()
    }
  }

  esCliente():boolean{
    this.profileService.tipo()
    return this.profileService.esCliente
  }

  esProfesional():boolean{
      this.profileService.tipo()
      if (this.profileService.esCliente){
        return false
      }
      return true
  }
}
