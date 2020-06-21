import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PresupuestoService } from '../services/presupuesto.services';
import { ActivatedRoute } from '@angular/router';
import { Presupuesto } from '../dominio/problema';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobData: Presupuesto
  constructor(private jobService: PresupuestoService, private route: ActivatedRoute) { }

  ngOnInit():void {
    this.route.params.subscribe(routeParams => {
      this.loadJob(routeParams.id)      
    })
    console.log(this.jobData)
  }

  async loadJob(id){
    this.jobData = await this.jobService.trabajoCompleto(id)
  }

 
}
