import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';

@Component({
  selector: 'app-trabajo-terminado',
  templateUrl: './trabajo-terminado.component.html',
  styleUrls: ['./trabajo-terminado.component.css']
})
export class TrabajoTerminadoComponent implements OnInit {

  trabajos: Presupuesto[] = []
  
  constructor(public trabajoServices: PresupuestoService) { }

  ngOnInit() {
    this.getTrabajos()
    console.log(this.trabajos)
  }

  async getTrabajos(){
    try{
    this.trabajos=await  this.trabajoServices.presupuesto()
  } catch{
     console.log('error en cargar lista')
   }
  }

}
