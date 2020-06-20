import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Usuario} from '../dominio/usuario'

import { REST_SERVER_URL } from './configuration';
import { of, from } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profesionales:Usuario[]
  clientes:Usuario[]
  constructor(private httpCLient: HttpClient,private user:LoginService) { 
    this.getProfesionales()
    this.getClientes()
  }

  async getFullProfile(id:String ) {
    return of (await this.httpCLient.get<Usuario>(REST_SERVER_URL + '/perfil_completo/' +id).toPromise())
  }

  async getProfesionales() {
     this.profesionales= (await this.httpCLient.get<Usuario[]>(REST_SERVER_URL + '/profesionales').toPromise())
    return this.profesionales.map((pres) => Usuario.fromJson(pres))
  }

  async getClientes( ): Promise<Usuario[]> {
      this.clientes= await this.httpCLient.get<Usuario[]>(REST_SERVER_URL + '/clientes').toPromise()
     return this.clientes.map((pres) => Usuario.fromJson(pres))
  }

  tipo(){
    var listCli =this.clientes.filter(a=>a.id==this.user.getUser().id)
    console.log(listCli) 
    var listPro =this.profesionales.filter(a=>a.id==this.user.getUser().id)
    console.log(listPro) 
    if(listCli.length!==0){
     return "Cliente"
    }
    if(listPro.length!==0){
     return "Profesional"
    }
   }
 
   esProfesional():boolean{
     return this.tipo()==="Profesional"
   }
}