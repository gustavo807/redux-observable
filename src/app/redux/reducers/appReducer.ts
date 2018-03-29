import { actionCreatorFactory } from "typescript-fsa";
import { Reducer } from "redux";
import { IApp } from "../../models/IApp";
import { routerReducer } from "@angular-redux/router";
import { userReducer } from "./usersReducer";
const actionCreator = actionCreatorFactory();

const prefix = `APP`;
class ActionTypes{
    static SOMEACTION = `${prefix}_SOMEACTION`;
}

export class ActionCreators{
    static someAction = actionCreator(ActionTypes.SOMEACTION);
}

//Reducer
export const appReducer : Reducer<IApp> = (state: IApp, action) => {
    const newState = {
        ...state,
        router: routerReducer(state.router, action),
        users: userReducer.build()(state.users, action)
    };

    switch(action.type){
        case ActionTypes.SOMEACTION:
            {
                return {...state, router:'/'}
            }
        default:
            return newState;
    }
}