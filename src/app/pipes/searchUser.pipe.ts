import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';


@Pipe({name: 'searchUser'})
export class SearchUser implements PipeTransform{
    transform(users: User[], value : string): User[]{
        value = value ? value.toLocaleUpperCase() : null;
        
        return value ? users.filter(user => 
            user.firstname.toLocaleUpperCase().includes(value) ||
            user.lastname.toLocaleUpperCase().includes(value) ||
            user.email.toLocaleUpperCase().includes(value) ||
            user.createdAt.toLocaleUpperCase().includes(value)
        )
        : 
        users;
    }
}