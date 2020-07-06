import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ProjectsModule } from './projects/projects.module';
import { ProjectService } from './services/project.service';
import { HttpProjectService } from './services/http-project.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ProjectsModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [
    { provide: ProjectService, useClass: HttpProjectService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
