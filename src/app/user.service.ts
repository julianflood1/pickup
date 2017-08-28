import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from './user.model';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers(){
    return this.users;
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  updateMember(localUpdatedUser){
 // var userEntryInFirebase = this.getUserById(localUpdatedUser.$key);
 // userEntryInFirebase.update({name: localUpdatedMember.name,
 //                             thumbName: localUpdatedMember.thumbName,
 //                             age: localUpdatedMember.age,
 //                             experience: localUpdatedMember.experience,
 //                             specialty: localUpdatedMember.specialty});
}

}
