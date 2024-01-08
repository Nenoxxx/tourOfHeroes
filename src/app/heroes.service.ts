import {Injectable} from '@angular/core';
import {Hero} from "../declarations";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() {
  }

  getHeroes(): Hero[] {
    return [
      {id: 12, name: 'Dr. Nice', superpower: 'Flying'},
      {id: 13, name: 'Bombasto'},
    ];
  }
}
