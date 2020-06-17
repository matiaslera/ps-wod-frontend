import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'


@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  busquedaForm = this.builder.group({
    problema: ['', Validators.required],
    especialidad: ['', Validators.required],
  });
  especialidad: string[] = ["electricidad", "plomeria", "herreria"];
  
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  buscar(){

  }
}
