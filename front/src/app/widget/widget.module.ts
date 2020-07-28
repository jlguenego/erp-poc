import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis.pipe';
import { AutofocusDirective } from './autofocus.directive';
import { KeywordsComponent } from './keywords/keywords.component';
import { PasswordComponent } from './password/password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordeonComponent } from './accordeon/accordeon.component';

@NgModule({
  declarations: [
    EllipsisPipe,
    AutofocusDirective,
    KeywordsComponent,
    PasswordComponent,
    AccordeonComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    EllipsisPipe,
    AutofocusDirective,
    KeywordsComponent,
    PasswordComponent,
    AccordeonComponent,
  ],
})
export class WidgetModule {}
