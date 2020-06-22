import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../dominio/problema';
import { PresupuestoService } from '../services/presupuesto.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Oferta } from '../dominio/oferta';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-job-answer',
  templateUrl: './job-answer.component.html',
  styleUrls: ['./job-answer.component.css']
})
export class JobAnswerComponent{

  ofertaJob: Oferta = new Oferta
  jobData: Presupuesto= new Presupuesto
  id:number
  constructor(private router: Router,private jobService: PresupuestoService, private route: ActivatedRoute,private user:LoginService) { }

  ngOnInit():void {
    this.route.params.subscribe(routeParams => {
      this.id=routeParams.id
      console.log(routeParams.id)
      this.loadJob(routeParams.id)      
    })
    this.cargarData()
    console.log(this.jobData)
    console.log(this.ofertaJob)
  }

  async loadJob(id){
    this.jobData = await this.jobService.trabajoCompleto(id)
  }

  cargarData(){
    this.ofertaJob.especialidad=this.user.getUser().especialidad
    this.ofertaJob.nombreApellido= this.user.getUser().nombreyApellido
    this.ofertaJob.idProfesional=this.user.getUserLoggedId()

  }

  async aceptar(){
    try{
      this.loadJob(this.id)
      console.log(this.jobData.id)
      console.log(this.ofertaJob)
      this.jobService.answerConsulta(this.ofertaJob,this.id)
      this.router.navigate(['home/trabajoPendiente'])
      console.log('se a enviado la respuesta del trabajo ', )
    }catch(e){
      console.log('no se puedo enviar la oferta ', e)
    }
  }

  cancelar(){
    this.router.navigate(['home/trabajoPendiente'])
  }
}
