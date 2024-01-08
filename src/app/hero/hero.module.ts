import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import {HeroComponent} from "./hero.component";
import {BadgeComponent} from "../badge/badge.component";


@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    BadgeComponent
  ]
})
export class HeroModule { }
