import { Component, OnInit } from '@angular/core';

import {HeroService} from "../hero.service";
import {Hero} from "../../declarations";

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
