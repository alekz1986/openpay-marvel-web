import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { CharacterComponent } from './pages/character/character.component';
import { SearchCharacterComponent } from './pages/search-character/search-character.component';
import { ListComponent } from './pages/list/list.component';
import { AuditComponent } from './pages/audit/audit.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: 'search', component: SearchCharacterComponent},
      {path: 'list', component: ListComponent},
      {path: 'audit', component: AuditComponent},
      {path: ':id', component: CharacterComponent},
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
