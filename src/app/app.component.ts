import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps-wod-frontend';
  constructor(private userLogService: LoginService){}
  
  isLogged(){
    return this.userLogService.isAuthenticated()
  }
  loggedId(){
    return this.userLogService.getUserLoggedId()
  }

  nombre(){
    if(!isUndefined(this.userLogService.getUser())){
    return this.userLogService.getUser()}
    //return "Usuario"
  }
}
