import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Jean-Louis';

  constructor() {
    setTimeout(() => {
      this.name = 'Maxime';
    }, 2000);
  }
}
