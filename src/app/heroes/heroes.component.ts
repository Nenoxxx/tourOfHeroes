import { Component } from '@angular/core';
import {Hero} from "../../declarations";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  selectedHero?: Hero;

  heroes: Hero[] = [
    { id: 12, name: 'Dr. Nice', superpower: 'Flying' },
    { id: 13, name: 'Bombasto' },
  ];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
