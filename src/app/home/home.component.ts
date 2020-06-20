import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { isUndefined } from 'util';
import { ProfileService } from '../services/perfil.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user:LoginService,private profileService: ProfileService) { }

  ngOnInit(): void {
    this.esProfesional()
  }

  userName(){
    if(!isUndefined(this.user.getUser())){
      return this.user.getUser().nombreyApellido
  }
  }

  userId(){
    if(!isUndefined(this.user.getUser())){
      return this.user.getUserLoggedId()
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
