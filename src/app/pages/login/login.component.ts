import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { SignInFieldsDefinition } from '../../fields-definition/sign-in-fields-definition';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signInFieldsDefinition!: SignInFieldsDefinition 

  constructor(private authServ: AuthServiceService, private router: Router) {
    

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    })

    this.signInFieldsDefinition = new SignInFieldsDefinition();

    
  }


  get signInFormModel() {
    return {
      title: 'LOG IN',
      formGroup: this.loginForm,
      fields : this.signInFieldsDefinition.define()
    }
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
