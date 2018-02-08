import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Location} from './location';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthenticationService {
    private url: string = Location.getAuthenticationJSON();
    constructor(private http: HttpClient) {
        // console.log(this.url);
    }
    login(username: string, password: string) {
        return this.http.get<any>(this.url)
            .map(user => {
                // login successful if there's a jwt token in the response
                let loggedIn: any = false;
                user.forEach(u => {
                    if (u && u.username === username && u.password === password) {
                        // console.log(user);
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        // localStorage.setItem('currentUser', JSON.stringify(user));
                        loggedIn = u;
                    }
                });
                return loggedIn;
            });

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}