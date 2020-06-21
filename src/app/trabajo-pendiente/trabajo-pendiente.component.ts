import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';
import { ProfileService } from '../services/perfil.service';

@Component({
  selector: 'app-trabajo-pendiente',
  templateUrl: './trabajo-pendiente.component.html',
  styleUrls: ['./trabajo-pendiente.component.css']
})
export class TrabajoPendienteComponent implements OnInit {

  trabajos: Presupuesto[] = []
  
  constructor(public trabajosServices: PresupuestoService,private profileService: ProfileService) { }

  ngOnInit() {
    this.updateTrabajos()
    console.log(this.trabajos)
  }

  async getTrabajosClientes(){
    try{
    this.trabajos=await  this.trabajosServices.consultas()
  } catch{
     console.log('error en cargar lista')
   }
  }

  async getTrabajosTecnicos(){
    try{
    this.trabajos=await  this.trabajosServices.consultasTecnica()
  } catch{
     console.log('error en cargar lista')
   }
  }

  noTieneTrabajos(){
    return this.trabajos.length ===0
  }

  updateTrabajos(){
    if(this.esCliente){
      this.getTrabajosClientes()
    }
    this.getTrabajosTecnicos()
  }

  esCliente():boolean{
    this.profileService.tipo()
    return this.profileService.esCliente
  }
}
