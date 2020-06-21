import { Component, OnInit, Input } from '@angular/core';
import { Presupuesto } from '../dominio/problema';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  nombre
  calificacion
  precio
  ubicacion
  @Input() consulta: Presupuesto
  @Input() reservacion:boolean
  precioEconomico: number
  constructor() { }

  ngOnInit(): void {
  }

 

}
