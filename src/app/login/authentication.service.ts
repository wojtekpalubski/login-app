import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {

  constructor(public http: Http) { }

  public isLoggedIn(username: string, password: string): Observable<boolean>{
    let headers = new Headers({'Content-Type':'X-custom'});
    let options = new RequestOptions({headers: headers});

    return this.http.get('./assets/login.json', options)
      .map((res: Response)=> { return res.json().username === username &&
        res.json().password === password;})
      .catch((error: any)=> {return Observable.throw(error.status+": "+error.statusText);});

  }

}
