import {Component, OnInit} from '@angular/core';

import {HeroService} from "../hero.service";
import {Hero} from "../../declarations";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onBadgeClick(heroId: number) {
    this.messageService.add(`Output: Badge clicked for hero with id=${heroId}`);
  }
}
