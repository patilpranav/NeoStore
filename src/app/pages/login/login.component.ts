import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authServ: AuthServiceService, private router: Router) {
    

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null,)
    })
  }

  login() {
    console.log('...logging in');
    if(this.loginForm.valid) {
        if(this.authServ.authenticateUser(this.loginForm.value.email, this.loginForm.value.password)) {
          this.router.navigate(['/home']);
        }
    } 
  }
}
