import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];
  constructor(private httpClient: HttpClient ) { }
 
  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users').pipe(map((res:any)=> {
       this.users = res;      
       return res;                                
    }));
  }

  getUser(id: number) {
     return this.users.find(user=> user.id === id);
  }
}
