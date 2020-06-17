import { NgModule } from '@angular/core'

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog'
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
@NgModule({
    imports: [
        MatSliderModule,
        MatSidenavModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatListModule
       
    ],
    exports: [
        MatSliderModule,
        MatDialogModule,
        MatSidenavModule,
        MatDividerModule,
        MatIconModule,
        MatListModule
    ]
})
export class MaterialModule { }