import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  DialogJob, JobDetailsComponent } from '../job-details/job-details.component';
import { FormBuilder } from '@angular/forms';
import { Presupuesto } from '../dominio/problema';
import { Oferta } from '../dominio/oferta';
import { PresupuestoService } from '../services/presupuesto.services';
import { ProfileService } from '../services/perfil.service';
import { Usuario } from '../dominio/usuario';

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.css']
})
export class ContratarComponent implements OnInit {

  presupuesto:Presupuesto=new Presupuesto()
  oferta:Oferta
  fecha
  profesional:Usuario =new Usuario() 
  constructor(public dialogRef: MatDialogRef<JobDetailsComponent>,private preService :PresupuestoService,private perfil :ProfileService,
    @Inject(MAT_DIALOG_DATA) public data: DialogJob) { }

  ngOnInit(): void {
    this.updateData()
  }

  async updateData() {
    this.presupuesto=this.data.presupuesto
    this.oferta=this.data.oferta
    console.log(this.presupuesto.fecha)
    console.log( this.presupuesto)
    if(this.estaContratado()){
      this.profesional = await this.perfil.getProfesional(this.presupuesto.idProfesional)
    }
    if(this.estaFinalizado()){
      this.profesional = await this.perfil.getProfesional(this.presupuesto.idProfesional)
    }
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

  estaContratado(){
    return this.presupuesto.contratado && !this.presupuesto.realizado
  }

  estaFinalizado(){
    return this.presupuesto.contratado && this.presupuesto.realizado
  }

  sinContratar(){
    return !this.presupuesto.contratado && !this.presupuesto.realizado
  }

 async finalizar(){
    try {
       this.presupuesto.contratado =true
       this.presupuesto.realizado =true
      await this.preService.finalizar(this.presupuesto)
      console.log('The dialog ya esta finalizado el trabajo');
    }
    catch (e) {
      e.error
    }
    console.log('The dialog rechazo finalizar la consulta');
    this.dialogRef.close();
  }


}
