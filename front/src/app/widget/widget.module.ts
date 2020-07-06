import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis.pipe';
import { AutofocusDirective } from './autofocus.directive';
import { KeywordsComponent } from './keywords/keywords.component';



@NgModule({
  declarations: [EllipsisPipe, AutofocusDirective, KeywordsComponent],
  imports: [
    CommonModule
  ],
  exports: [EllipsisPipe, AutofocusDirective, KeywordsComponent]
})
export class WidgetModule { }
