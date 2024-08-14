import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  users = [{email: 'patilpranav050@gmail.com', password:9833273671}, {email: 'patilpranav900@gmail.com', password:7021327073},
    {email:'pp',password:1}
  ];
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    const isAuth = localStorage.getItem('isAuth');
    if(!!isAuth) {
      this.isAuthenticatedSubject.next(true);
    }
    
   }

  authenticateUser(email:string, password: number) {
    const userThere = this.users.some(user => user.email === email && user.password == password);
    if(userThere) {
      this.isAuthenticatedSubject.next(true);
      localStorage.setItem('isAuth', JSON.stringify(this.isAuthenticatedSubject.value))
      return true
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }

  logout() {
    localStorage.removeItem('isAuth');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login'])
  }

  getUsers() {
    return [...this.users]
  }

  addUsers(user:User) {
    const {email, password} = user;
    this.users.push({email, password});
  }
}
