import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PresupuestoComponent } from '../presupuesto/presupuesto.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { PresupuestoService } from '../services/presupuesto.services';
import { LoginService } from '../services/login.service';



export interface DialogData {
  especialidad: string;
  problema: string;
}
@Component({
  selector: 'app-add-presupuesto',
  templateUrl: './add-presupuesto.component.html',
  styleUrls: ['./add-presupuesto.component.css']
})
export class AddPresupuestoComponent {

  busquedaForm = this.builder.group({
    idCreador:['', Validators.required],
    problema: ['', Validators.required],
    especialidad: ['', Validators.required],
    direccion: ['', Validators.required],
    descripcion: ['', Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<PresupuestoComponent>,private builder: FormBuilder,private presupuetoSer:PresupuestoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private profileService: LoginService)  { 
      this.updateFrom()
    }

    updateFrom() {
      this.busquedaForm.patchValue({
        idCreador: this.profileService.getUserLoggedId(),
        problema: this.data.problema,
        especialidad: this.data.especialidad
      });
    }

  cancelar(){
    console.log('The dialog esta cerrado');
    this.dialogRef.close();
  }


  async enviarConsulta(){
    try {
      await this.presupuetoSer.addPresupuesto(this.busquedaForm.value)
      //this.problemas=this.presService.basePresupuestos
    }
    catch (e) {
      e.error
    }
    console.log(this.busquedaForm.value);
    console.log('The dialog envio la consulta');
    this.dialogRef.close();
  }
}
