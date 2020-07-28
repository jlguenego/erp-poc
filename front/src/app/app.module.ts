import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ProjectService } from './services/project.service';
import { HttpProjectService } from './services/http-project.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { WidgetModule } from './widget/widget.module';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { SalarieEffects } from './effects/salarie.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    UserModule,
    WidgetModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([SalarieEffects]),
  ],
  providers: [{ provide: ProjectService, useClass: HttpProjectService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
