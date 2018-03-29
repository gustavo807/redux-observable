
import { User } from '../../models/user';
import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();
import { reducerWithInitialState } from "typescript-fsa-reducers";

const prefix = 'USERS';
class ActionTypes{
    static GET = `${prefix}_GET`;
}

export class ActionCreators{
    static get = actionCreator.async<any, Array<User>>(ActionTypes.GET);
}

export interface IUsersState{
    users: Array<User>;
    loading: boolean;
}

const initialState : IUsersState = {
    users: [],
    loading: false
}

//Reducer
export const userReducer = reducerWithInitialState(initialState)
    .case(ActionCreators.get.started, (state: IUsersState): IUsersState => {
        return {...state, loading: true};
    })
    .case(ActionCreators.get.failed, (state: IUsersState): IUsersState => {
        return {...state, loading: false};
    })
    .case(ActionCreators.get.done, (state: IUsersState, payload): IUsersState => {
        return {...state, loading: false, users: Object.assign(state.users, payload)};
    });