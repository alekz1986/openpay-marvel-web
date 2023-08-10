import { Component, OnInit } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { CharactersService } from '../../service/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  public characters: Character[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters()
      .subscribe(resp => {
        this.characters = resp.data.results;
      })
  }

}
