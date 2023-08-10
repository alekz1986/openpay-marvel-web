import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}, //lazyload
  {path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)}, //lazyload
  {path: 'notfound', component: NotFoundComponent},
  {path: '', redirectTo: 'characters/list', pathMatch: 'full'},
  {path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
