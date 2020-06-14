import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Usuario } from '../dominio/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  User= {
    name:''
  }
  private userLogeado: Usuario = new Usuario
  constructor(private user:LoginService) { }
  
  ngOnInit(): void {
    this.userName()
  }

  userName(){
    return this.user.getUser().nombreyApellido

  }
}
