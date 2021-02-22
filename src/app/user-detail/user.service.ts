import { Injectable } from '@angular/core';
import { UserData } from '../MockData/data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetails = UserData.data
  constructor() { }

  getUserData(id){
    let result = this.userDetails.filter(function(o){return o.id == id;})
    return(of(result[0]))
  }
}
