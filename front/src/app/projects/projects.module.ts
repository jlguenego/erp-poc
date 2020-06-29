import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    WidgetModule,
  ]
})
export class ProjectsModule { }
