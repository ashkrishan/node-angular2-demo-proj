import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {User} from './user'; 


@Injectable()
export class UserAuthService {

    userUrl = 'http://localhost:3000/user';
    headers = new Headers({'Content-Type': 'application/json'});


    constructor(private _http: Http) {

    }

    signupUser(user: User){
        return this._http.post(this.userUrl, JSON.stringify(user), {headers: this.headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    signinUser(user: User) {
        return this._http.post(this.userUrl + '/' + 'signin', JSON.stringify(user), {headers: this.headers})
            .map(response => { response.json()
                             
                             }
            )
            .catch(error => Observable.throw(error.json()));
    }


}