import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { IconsModule } from './icons/icons.module';

import { SearchUser } from './pipes/searchUser.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsreactiveComponent } from './components/formsreactive/formsreactive.component';

// Redux
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { StoreModule } from './redux/store';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    SearchUser,
    FormsreactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    IconsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
