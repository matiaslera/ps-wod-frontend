import { Component, OnInit, Input } from '@angular/core';
import { Presupuesto } from '../dominio/problema';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {


  @Input() consulta: Presupuesto
  @Input() imagen:String
  constructor() { }

  ngOnInit(): void {
  }

 

}
