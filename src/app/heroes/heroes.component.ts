import {Component, OnInit} from '@angular/core';
import {Hero} from "../../declarations";
import {HeroesService} from "../heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroesService
  ) { }

  heroes: Hero[] | undefined;
  selectedHero?: Hero;

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}