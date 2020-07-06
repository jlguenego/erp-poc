import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ProjectComponent } from './projects/project/project.component';
import { ListComponent } from './projects/list/list.component';
import { CreateComponent } from './projects/create/create.component';
import { UserGuard } from './guards/user.guard';
// import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  {
    path: 'chantiers',
    component: ProjectComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: '', // child route path
        component: ListComponent, // child route component that the router renders
      },
      {
        path: 'nouveau',
        component: CreateComponent, // another child route component that the router renders
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
