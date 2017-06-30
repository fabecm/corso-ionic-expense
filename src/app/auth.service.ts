import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    private apiUrl = 'http://ionic-backend.crispybacon.us';
    getToken (username: string, password: string) {
        return this.http.post(`${this.apiUrl}/token`, {
            username: username,
            password: password
        }).toPromise();
    }

    setLocalToken (token: string) {
        localStorage.setItem('TOKEN', token);
    }

    getLocalToken () {
        return localStorage.getItem('TOKEN');
    }
    constructor (private http: Http) {}
}