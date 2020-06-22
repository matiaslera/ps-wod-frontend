import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../dominio/oferta';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-job-answer',
  templateUrl: './job-answer.component.html',
  styleUrls: ['./job-answer.component.css']
})
export class JobAnswerComponent{

  ofertaJob: Oferta
  jobData: Presupuesto= new Presupuesto
  constructor(private jobService: PresupuestoService, private route: ActivatedRoute,private user:LoginService) { }

  ngOnInit():void {
    this.route.params.subscribe(routeParams => {
      this.loadJob(routeParams.id)      
    })
    this.cargarUser()
    console.log(this.jobData)
  }

  async loadJob(id){
    this.jobData = await this.jobService.trabajoCompleto(id)
  }

  cargarUser(){
    this.ofertaJob.fechaCreada = new Date()
    this.ofertaJob.profesional= this.user.getUser()
  }

  aceptar(){

  }

  cancelar(){
    
  }
}
