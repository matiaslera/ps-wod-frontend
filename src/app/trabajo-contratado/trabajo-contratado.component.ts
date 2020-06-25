import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';

@Component({
  selector: 'app-trabajo-contratado',
  templateUrl: './trabajo-contratado.component.html',
  styleUrls: ['./trabajo-contratado.component.css']
})
export class TrabajoContratadoComponent implements OnInit {

  trabajos: Presupuesto[]=[]
  imagen= "../../assets/pendiente.jpg"
  constructor(public trabajoServices: PresupuestoService) { }

  ngOnInit() {
    this.getTrabajos()
    console.log(this.trabajos)
  }

  async getTrabajos(){
    try{
    this.trabajos=await  this.trabajoServices.trabajosPendientes()
    console.log(this.trabajos)
  } catch{
     console.log('error en cargar lista')
   }
  }

  noTieneTrabajos(){
    return this.trabajos.length ===0
  }

}
