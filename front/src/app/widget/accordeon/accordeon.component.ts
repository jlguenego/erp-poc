import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss'],
})
export class AccordeonComponent implements OnInit {
  @Input() myTitre = 'default';

  @Input() isCollapsed = true;

  @Output() doToggle = new EventEmitter<boolean>();

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.doToggle.emit(this.isCollapsed);
  }
}
