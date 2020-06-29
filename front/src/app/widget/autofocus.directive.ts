import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  constructor(private elt: ElementRef<HTMLElement>) {
    console.log('directive autofocus constructor xxx');
  }
  ngOnInit(): void {
    this.elt.nativeElement.focus();
  }
}
