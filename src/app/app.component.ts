import { Component } from '@angular/core';
import { Hero } from '../declarations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testProject';
  selectedHero?: Hero;

  heroes: Hero[] = [
    { id: 12, name: 'Dr. Nice', superpower: 'Flying' },
    { id: 13, name: 'Bombasto' },
  ];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
