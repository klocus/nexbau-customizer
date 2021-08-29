import { Component } from '@angular/core';
import { Locale } from './data/Locale.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Nexbau Customizer';

  localesList: Locale[] = [
    { code: 'en-US', label: 'English' },
    { code: 'pl', label: 'Polski' }
  ]
}
