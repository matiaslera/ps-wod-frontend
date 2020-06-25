import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  DialogJob, JobDetailsComponent } from '../job-details/job-details.component';
import { FormBuilder } from '@angular/forms';
import { Presupuesto } from '../dominio/problema';
import { Oferta } from '../dominio/oferta';
import { PresupuestoService } from '../services/presupuesto.services';

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.css']
})
export class ContratarComponent implements OnInit {

  presupuesto:Presupuesto=new Presupuesto()
  oferta:Oferta
  fecha
  constructor(public dialogRef: MatDialogRef<JobDetailsComponent>,private builder: FormBuilder,private preService :PresupuestoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogJob) { }

  ngOnInit(): void {
    this.updateData()
  }

  updateData() {
    this.presupuesto=this.data.presupuesto
    this.oferta=this.data.oferta
    //this.fecha=this.presupuesto.fecha
    console.log(this.presupuesto.fecha)
    console.log( this.oferta)
  }

cancelar(){
  console.log('The dialog esta cerrado');
  this.dialogRef.close();
}

async aceptar(){
  try {
    this.presupuesto.monto=this.oferta.monto
    this.presupuesto.notas=this.oferta.comentario
    this.presupuesto.idProfesional=this.oferta.idProfesional
    this.presupuesto.ofertas= []
    await this.preService.contratar(this.presupuesto)
    console.log('The dialog aceptoooo');
  }
  catch (e) {
    e.error
  }
  console.log('The dialog rechazo la consulta');
  this.dialogRef.close();
}

}
