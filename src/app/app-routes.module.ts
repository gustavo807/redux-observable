import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { UserComponent } from './components/user/user.component';
import { FormsreactiveComponent } from './components/formsreactive/formsreactive.component';

const appRoutes: Routes = [
    {
        path: '', 
        component: UserComponent
    },
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'formsreactive',
        component: FormsreactiveComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}