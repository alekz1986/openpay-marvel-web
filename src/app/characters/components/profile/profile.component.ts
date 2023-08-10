import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'character-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  
  @Input()
  public character!: Character;

  ngOnInit(): void {
    if (!this.character) 
      throw Error('Character es requerido');
  }

}
