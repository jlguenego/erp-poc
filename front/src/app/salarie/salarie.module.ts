import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalarieRoutingModule } from './salarie-routing.module';
import { SalarieComponent } from './salarie.component';


@NgModule({
  declarations: [SalarieComponent],
  imports: [
    CommonModule,
    SalarieRoutingModule
  ]
})
export class SalarieModule { }
