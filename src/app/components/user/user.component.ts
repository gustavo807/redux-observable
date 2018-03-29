import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { NotificationsService } from 'angular2-notifications';
import { Options } from '../../models/options';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, NotificationsService]
})
export class UserComponent implements OnInit {
  users : User[];
  item: Object = {};
  isEdit : boolean = false;

  public options = Options;

  constructor(private userService : UserService, private notificationService : NotificationsService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe(res => {
        this.users = res;
      });
  }

  onSubmit(){
    if(!this.isEdit)
      this.addUser();
    else{
      this.editUser();
      this.isEdit = false;
    }
    this.reset();
  }

  addUser(){
    this.userService.addUser(this.item)
      .subscribe(res => {
        this.notificationService.success("User added", res.firstname);
        this.getUsers();
      });
  }

  editUser(){
    this.userService.editUser(this.item)
      .subscribe(res => {
        this.notificationService.info("User edited", res.firstname);
        this.getUsers();
      });
  }

  isEditUser(user){
    this.isEdit = true;
    this.item = Object.assign({}, user);
  }

  deleteUser(user){
    if(confirm("Are you sure to delete; "+user.firstname))
      this.userService.deleteUser(user)
        .subscribe(res => {
          this.notificationService.alert("User deleted", res.firstname);
          this.getUsers();
        });
  }

  reset(){
    this.item = {};
  }

  cancelEdit(){
    this.reset();
    this.isEdit = !this.isEdit;
  }

}
