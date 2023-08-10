import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { SearchCharacterComponent } from './pages/search-character/search-character.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { AuditComponent } from './pages/audit/audit.component';


@NgModule({
  declarations: [
    CharacterComponent,
    CharactersComponent,
    SearchCharacterComponent,
    LayoutComponent,
    ListComponent,
    AuditComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule
  ]
})
export class CharactersModule { }
