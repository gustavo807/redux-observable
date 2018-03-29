import { Epic } from 'redux-observable-decorator';
import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActionCreators } from '../reducers/usersReducer';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UsersEpicsProvider{
    constructor(private userService : UserService){}

    @Epic() users = (action$) => action$
        .ofType(ActionCreators.get.started.type)
        .switchMap(() => {
            return this.userService.getUsers()
                .map( (data: any) => ActionCreators.get.done(data))
                .catch(response => of(ActionCreators.get.failed(response)));
        });
}