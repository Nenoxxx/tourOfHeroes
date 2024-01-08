import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LearnedRoutingModule} from './learned-routing.module';
import {LearnedComponent} from './learned.component';


@NgModule({
  declarations: [
    LearnedComponent
  ],
  imports: [
    CommonModule,
    LearnedRoutingModule
  ]
})
export class LearnedModule {
}
