import { Component, OnInit, Input } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { ActivatedRoute, Router } from '@angular/router';
import { PresupuestoService } from '../services/presupuesto.services';
import { MatDialog } from '@angular/material/dialog';
import { ContratarComponent } from '../contratar/contratar.component';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  @Input() esConsulta: Boolean
  @Input() consulta: Presupuesto
  @Input() imagen:String
  constructor(private jobService: PresupuestoService, private route: ActivatedRoute,private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ver(){
    const dialogRef = this.dialog.open(ContratarComponent, {
      height: '600px',
      width: '700px',
      data: {presupuesto:this.consulta} })
    //ingresar a una nueva pagina con los detalles del trabajo
    //donde me salga para aceptar o cancelar
  }

  estaContratado(){
    return this.consulta.contratado && !this.consulta.realizado
  }

  estaFinalizado(){
    return this.consulta.contratado && this.consulta.realizado
  }
 

}
