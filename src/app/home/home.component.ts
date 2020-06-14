import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user:LoginService) { }

  ngOnInit(): void {
  }

  userName(){
    if(!isUndefined(this.user.getUser())){
      return this.user.getUser().nombreyApellido
  }
  }
}
