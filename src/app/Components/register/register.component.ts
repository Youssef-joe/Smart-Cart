import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private userService: UserService, private router: Router) {}
  register () {
    const user = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
    this.userService.registerUser(user).subscribe(
      response => {
        console.log("registration successful", response)
        this.router.navigate(['/home']);
      },
      error => {
        console.error("registration error", error)
      }
    )
  }


  onRegister(userData: any) {
      this.userService.registerUser(userData).subscribe((response) => {
        //Assuming userData is the object containing user details
        if (response.user) {
          this.userService.setUser(response.user); //set userData in the service
        }

      })


  }

}
