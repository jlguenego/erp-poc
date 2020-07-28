import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalarieComponent } from './salarie.component';

const routes: Routes = [{ path: '', component: SalarieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalarieRoutingModule { }
