
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDataWrapper } from '../interface/character.interface';

@Injectable({providedIn: 'root'})
export class CharactersService {

    constructor(private httpClient: HttpClient) { }

    getCharacters(): Observable<CharacterDataWrapper> {
        let token = sessionStorage.getItem('token');

        const headers: HttpHeaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.httpClient
            .get<CharacterDataWrapper>(`/marvel/characters`,
                {headers});
    }

}