import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../models/user';

@Injectable()
export class UserService {
  prefix : string = 'http://localhost:1337/user/';

  constructor(private http : Http) { }

  getUsers() : Observable<User[]>{
    return this.http.get(this.prefix)
              .map(this.extractData)
              .catch(this.handleError);
  }

  addUser(user){
    return this.http.post(this.prefix, user)
              .map(res => res.json());
  }

  editUser(user){
    return this.http.put(this.prefix + user.id, user)
              .map(res => res.json());
  }

  deleteUser(user){
    return this.http.delete(this.prefix + user.id)
              .map(res => res.json());
  }

  private extractData(res: Response){
    let body = res.json();
    return body || [];
  }

  private handleError(error: Response | any) {
    // TODO: Verify this logic, maybe add ng notify
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}

}
