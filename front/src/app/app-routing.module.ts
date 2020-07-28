import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ProjectComponent } from './projects/project/project.component';
import { UserGuard } from './guards/user.guard';
import { projectRoutes } from './projects/projects.module';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  {
    path: 'chantiers',
    component: ProjectComponent,
    canActivate: [UserGuard],
    children: projectRoutes,
  },
  { path: 'login', component: LoginComponent },
  { path: 'salarie', loadChildren: () => import('./salarie/salarie.module').then(m => m.SalarieModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
