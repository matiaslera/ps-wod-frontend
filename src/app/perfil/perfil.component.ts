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
  constructor(private user:LoginService,private profileService: ProfileService, private route: ActivatedRoute) { }

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
    if(this.esCliente()) {
      return "Cliente"
    }
    if(this.esProfesional()){
      return "Profesional"
  }
}

  esProfesional():boolean{
    this.profileService.tipo()
    if (this.profileService.esCliente){
      return false
    }
    return true
  }

  esCliente():boolean{
    this.profileService.tipo()
    return this.profileService.esCliente
  }

}
