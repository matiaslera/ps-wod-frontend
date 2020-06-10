import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';
import { Usuario } from 'src/app/dominio/usuario';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private userLogged: Usuario = new Usuario

  constructor(private http: HttpClient) {}

  async authenticate(credentials: Usuario) {
    this.userLogged = await this.http.post<Usuario>(REST_SERVER_URL + '/login', credentials).toPromise()
  }
  
  getUser() {
    return this.userLogged
  }

  getUserLoggedId() {
    return this.userLogged.id
  }

  isAuthenticated() {
    return !isUndefined(this.userLogged.id)
  }

}