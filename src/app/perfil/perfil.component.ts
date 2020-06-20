import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Usuario } from '../dominio/usuario';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfilData: Observable<{}>
  profesionales:Usuario[]
  clientes:Usuario[]
  constructor(private user:LoginService,private profileService: ProfileService, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
    this.userName()
    this.route.params.subscribe(routeParams => {
      this.loadProfile(routeParams.id)      
    })
  }

  userName(){
    return this.user.getUser().nombreyApellido
  }
  
  async loadProfile(id:String){
    this.perfilData = await this.profileService.getFullProfile(id)
  }

  tipo(){
    return this.profileService.tipo()
  }

  esProfesional():boolean{
    return this.tipo()==="Profesional"
  }
}
