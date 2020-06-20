import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';
import { Presupuesto } from '../dominio/problema';
import { LoginService } from './login.service';

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

}