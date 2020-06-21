import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';

@Component({
  selector: 'app-trabajo-pendiente',
  templateUrl: './trabajo-pendiente.component.html',
  styleUrls: ['./trabajo-pendiente.component.css']
})
export class TrabajoPendienteComponent implements OnInit {

  trabajos: Presupuesto[] = []
  
  constructor(public trabajosServices: PresupuestoService) { }

  ngOnInit() {
    this.getHotels()
    console.log(this.trabajos)
  }

  async getHotels(){
    try{
    this.trabajos=await  this.trabajosServices.presupuesto()
  } catch{
     console.log('error en cargar lista')
   }
  }

}
