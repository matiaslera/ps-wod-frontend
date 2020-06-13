import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Usuario } from '../dominio/usuario'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  public userCredentials:Usuario
  constructor(private router: Router,private userLogService: LoginService,  private biulter: FormBuilder) {
    this.loginForm = this.biulter.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.userCredentials = new Usuario
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }

 // async authenticate() {
  //  try{
   //   await this.userLogService.authenticate(this.userCredentials)
    //  this.router.navigate(['home/vuelos'])
   // }
   // catch(e){
    //  e.error
    //}
  //}
   authenticate() {
      this.router.navigate(['home'])
  }

  formHasData(){
    return this.loginForm.status == 'INVALID'
  }
 
  navigateHome(){
    this.router.navigate(['home']);
  }

  getUsernameValue():string{
    return this.loginForm.get('username').value
  }

  getPasswordValue():string{
    return this.loginForm.get('password').value
  }
  


}
