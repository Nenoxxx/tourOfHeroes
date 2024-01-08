import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/heroes'},
  {path: 'heroes', loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},

  {path: 'detail', loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule)},
  {path: 'detail/:id', loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule)},

  {path: 'learned', loadChildren: () => import('./learned/learned.module').then(m => m.LearnedModule)},
  {path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
