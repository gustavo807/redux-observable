import { NgModule } from "@angular/core";
import { NgReduxModule, NgRedux, DevToolsExtension } from "@angular-redux/store";
import { NgReduxRouterModule, NgReduxRouter } from "@angular-redux/router";
import { UsersEpicsProvider } from "./epics/usersEpics";
import { IApp } from "../models/IApp";
import { appReducer } from "./reducers/appReducer";
import { createEpics } from "redux-observable-decorator";


@NgModule({
    imports: [NgReduxModule, NgReduxRouterModule],
    providers: [UsersEpicsProvider, NgReduxRouter]
})
export class StoreModule{
    constructor(
        public ngRedux: NgRedux<IApp>,
        usersEpicsProvider: UsersEpicsProvider,
        devTools: DevToolsExtension,
        ngReduxRouter: NgReduxRouter
    ){
        ngRedux.configureStore(
            appReducer,
            {
                router: '',
                users: undefined
            },
            [createEpics(usersEpicsProvider)],
            devTools.isEnabled ? [devTools.enhancer()] : []
        );

        if(ngReduxRouter){ 
            ngReduxRouter.initialize() 
        }
    }

    
}