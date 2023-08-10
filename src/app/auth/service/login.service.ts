import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from "../interface/login.interface";
import { Token } from "@angular/compiler";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class LoginService {

    constructor(private httpClient: HttpClient) { }

    getToken(): Observable<LoginResponse> {
        let loginUser:LoginRequest = {
            user: "alexch",
            password: "123456"
        };
        
        return this.httpClient.post<LoginResponse>('/marvel/authentication/login', loginUser);
    }

}