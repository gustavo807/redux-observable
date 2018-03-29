import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { IApp } from '../../models/IApp';
import { ActionCreators } from '../../redux/reducers/usersReducer';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formsreactive',
  templateUrl: './formsreactive.component.html',
  styleUrls: ['./formsreactive.component.css']
})
export class FormsreactiveComponent implements OnInit {
  form: FormGroup;

  @select(x => x.users.users) users : Observable<Array<User>>;

  constructor(
    private fb : FormBuilder,
    private store: NgRedux<IApp>
  ) {
    this.form = fb.group({
      "firstname" :  ["", Validators.required],
      "lastname" : ["", Validators.required],
      "email" : ["", [Validators.required, Validators.email]]
    });
   }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.store.dispatch(ActionCreators.get.started(null));
  }

  onSubmit(){
    console.log(this.form);
  }

  reset(){
    this.form.reset();
  }

}
