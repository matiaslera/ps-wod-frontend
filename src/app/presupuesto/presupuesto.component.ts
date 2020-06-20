import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import {  Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';

import * as _ from 'lodash'
import { Router } from '@angular/router'
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AddPresupuestoComponent } from '../add-presupuesto/add-presupuesto.component';
import { ProfileService } from '../services/perfil.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  basePresupuestos: Presupuesto[];
  busquedaForm = this.builder.group({
    problema: ['', Validators.required],
    especialidad: ['', Validators.required],
  });
  
  especialidad: string[] = ["Electricidad", "Plomeria", "Herreria","Gasista","Carpinteria","Pintor","Armado en Seco"];

  problemas:Presupuesto[];

  constructor(private builder: FormBuilder, private presService:PresupuestoService,private profileService: ProfileService,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getPresupuestos()
  }

  async buscar(){
    try {
      await this.presService.busqueda(this.busquedaForm.value)
      this.problemas=this.presService.basePresupuestos
    }
    catch (e) {
      e.error
    }
    console.log(this.busquedaForm.value);
    
  }

  async getPresupuestos(){
     this.problemas=await this.presService.presupuesto()
  }


  clear(){
    this.busquedaForm.patchValue({
      problema: '',
      especialidad: '',
    });
  
  }
  create(){
    const dialogRef = this.dialog.open(AddPresupuestoComponent, {
      height: '600px',
      width: '700px',
      data: {especialidad:this.busquedaForm.get('especialidad').value,
        problema:  this.busquedaForm.get('problema').value} })
  
  }

  esCliente():boolean{
    this.profileService.tipo()
    return this.profileService.esCliente
  }
}
