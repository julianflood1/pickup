import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Profile } from './profile.model';

@Injectable()
export class UserService {
  profiles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('profiles');
  }

  getUsers(){
    return this.profiles;
  }

  addProfile(newProfile: Profile) {
    this.profiles.push(newProfile);
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
