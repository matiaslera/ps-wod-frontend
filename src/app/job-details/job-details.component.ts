import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PresupuestoService } from '../services/presupuesto.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Presupuesto } from '../dominio/problema';
import { ContratarComponent } from '../contratar/contratar.component';
import { MatDialog } from '@angular/material/dialog';
import { Oferta } from '../dominio/oferta';


export interface DialogJob {
  presupuesto: Presupuesto;
  oferta: Oferta;
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {

   jobData: Presupuesto=new Presupuesto()

  constructor(private jobService: PresupuestoService, private route: ActivatedRoute,private router: Router,public dialog: MatDialog) { }

  ngOnInit():void {
    this.route.params.subscribe(routeParams => {
      this.loadJob(routeParams.id)      
    })
  } 

  async loadJob(id){
    this.jobData = await this.jobService.trabajoCompleto(id)
    console.log(this.jobData)
  }

  contratar(ofertaSeleccionada:Oferta){
    const dialogRef = this.dialog.open(ContratarComponent, {
      height: '600px',
      width: '700px',
      data: {presupuesto:this.jobData,
        oferta:ofertaSeleccionada} })
   // this.router.navigate(['home/contrato'])
    //ingresar a una nueva pagina con los detalles del trabajo
    //donde me salga para aceptar o cancelar
  }
 
}
