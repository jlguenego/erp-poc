import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ProjectsRoutingModule } from './projects-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../widget/widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './project/project.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComponent, CreateComponent, ProjectComponent],
  imports: [
    CommonModule,
    RouterModule,
    // ProjectsRoutingModule,
    ReactiveFormsModule,
    WidgetModule,
    FontAwesomeModule,
  ],
})
export class ProjectsModule {}
