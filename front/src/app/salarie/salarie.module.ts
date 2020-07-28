import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalarieRoutingModule } from './salarie-routing.module';
import { SalarieComponent } from './salarie.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SalarieComponent],
  imports: [CommonModule, SalarieRoutingModule, FontAwesomeModule],
})
export class SalarieModule {}
