import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { SearchCharacterComponent } from './pages/search-character/search-character.component';
import { LayoutComponent } from './pages/layout/layout.component';


@NgModule({
  declarations: [
    CharacterComponent,
    CharactersComponent,
    SearchCharacterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
