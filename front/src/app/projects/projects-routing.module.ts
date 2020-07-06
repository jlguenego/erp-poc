import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UserGuard } from '../guards/user.guard';

const routes: Routes = [
  { path: 'chantiers', component: ListComponent, canActivate: [UserGuard] },
  { path: 'chantiers/nouveau', component: CreateComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
