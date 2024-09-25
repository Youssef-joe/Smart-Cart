import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api'; // Your backend URL
  private userSubject = new BehaviorSubject<any>(null) //userData observable
  user$ = this.userSubject.asObservable(); // Expose the observable

  constructor(private http: HttpClient) {}

  // Register user
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  // Fetch user data after registration
  fetchUserData(userId: string): Observable<any> { 
    return this.http.get(`${this.baseUrl}/users/${userId}`); // Assuming this endpoint returns user data
  }

  //set user data in the subject
  setUser(user:any) {
    this.userSubject.next(user);
  }
}
