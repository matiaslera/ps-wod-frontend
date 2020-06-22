import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';
import { ProfileService } from '../services/perfil.service';

@Component({
  selector: 'app-trabajo-pendiente',
  templateUrl: './trabajo-pendiente.component.html',
  styleUrls: ['./trabajo-pendiente.component.css']
})
export class TrabajoPendienteComponent  {

  trabajos: Presupuesto[]=[];
  constructor(public trabajosServices: PresupuestoService,private profileService: ProfileService) {
    this.updateTrabajos()
   }

  ngOnInit():void {
    console.log(this.trabajos)               
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
    this.trabajos=await  this.trabajosServices.consultasTecnica()
    console.log(this.trabajos)    
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
