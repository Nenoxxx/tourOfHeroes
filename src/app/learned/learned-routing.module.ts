import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnedComponent } from './learned.component';

const routes: Routes = [{ path: '', component: LearnedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnedRoutingModule { }
