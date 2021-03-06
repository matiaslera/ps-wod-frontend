import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';
import { Presupuesto } from '../dominio/problema';
import { LoginService } from './login.service';
import { Oferta } from '../dominio/oferta';
import { Usuario } from '../dominio/usuario';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

 basePresupuestos: Presupuesto[] ;
 constructor(private http: HttpClient, private login:LoginService) {}

async presupuesto(): Promise<Presupuesto[]>  {
    const basePresupuestos = await this.http.get<Presupuesto[]>(REST_SERVER_URL + '/presupuestos').toPromise();
    return basePresupuestos.map((pres) => Presupuesto.fromJson(pres));
  }

async  busqueda(parametros) {
    console.log(parametros);
       let body =parametros
       this.basePresupuestos= await  this.http.post<Presupuesto[]>(REST_SERVER_URL + '/search_presupuestos', parametros).toPromise()   
  }

async addPresupuesto(presupuesto:Presupuesto) {
    let json = JSON.stringify(presupuesto) 
    console.log(json);
    await  this.http.post(REST_SERVER_URL + '/new_qery/' +this.login.getUserLoggedId(), json).toPromise()
  }

async consultas(): Promise<Presupuesto[]>  {
    const basePresupuestos = await this.http.get<Presupuesto[]>(REST_SERVER_URL + '/query_made/'+this.login.getUserLoggedId()).toPromise();
    return basePresupuestos.map((pres) => Presupuesto.fromJson(pres));
  }

async trabajoCompleto(id)  {
  const json= await this.http.get<Presupuesto>(REST_SERVER_URL + '/job_completo/'+id).toPromise();
  console.log(json)
 return   Presupuesto.fromJson(json)
  }

async consultasTecnica(): Promise<Presupuesto[]>  {
    const basePresupuestos = await this.http.get<Presupuesto[]>(REST_SERVER_URL + '/query_tecnica/'+this.login.getUserLoggedId()).toPromise();
    return basePresupuestos.map((pres) => Presupuesto.fromJson(pres));
  }

  async answerConsulta(oferta:Oferta,id:Number) {
    let json = JSON.stringify(oferta) 
    console.log(json);
    await  this.http.post(REST_SERVER_URL + '/job_answer/' +id, json).toPromise()
  }
  
  async especialidad(especialidad:Usuario): Promise<Presupuesto[]> {
    let json = JSON.stringify(especialidad)
    console.log(json);
    const basePresupuestos = await this.http.post<Presupuesto[]>(REST_SERVER_URL + '/prof_tecnica',json).toPromise();
    return basePresupuestos.map((pres) => Presupuesto.fromJson(pres));
  }

  async trabajosTerminado(): Promise<Presupuesto[]>  {
    const basePresupuestos = await this.http.get<Presupuesto[]>(REST_SERVER_URL + '/jod_finalizados/'+this.login.getUserLoggedId()).toPromise();
    return basePresupuestos.map((pres) => Presupuesto.fromJson(pres));
  }

  async contratar(presupuesto:Presupuesto) {
    let json = JSON.stringify(presupuesto)
    console.log(json)
     await this.http.post<Presupuesto[]>(REST_SERVER_URL + '/add_job',json).toPromise();
  }

  async trabajosPendientes(): Promise<Presupuesto[]>  {
    const basePresupuestos = await this.http.get<Presupuesto[]>(REST_SERVER_URL + '/jod_pendiente/'+this.login.getUserLoggedId()).toPromise();
    return basePresupuestos.map((pres) => Presupuesto.fromJson(pres));
  }

  async finalizar(presupuesto:Presupuesto) {
    let json = JSON.stringify(presupuesto)
    console.log(json)
     await this.http.post<Presupuesto[]>(REST_SERVER_URL + '/end_job',json).toPromise();
  }

}