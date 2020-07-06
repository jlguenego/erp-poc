import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UserGuard } from '../guards/user.guard';

const routes: Routes = [
  { path: 'chantiers', component: ListComponent },
  { path: 'chantiers/nouveau', component: CreateComponent },
];

routes.forEach((route) => (route.canActivate = [UserGuard]));

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
