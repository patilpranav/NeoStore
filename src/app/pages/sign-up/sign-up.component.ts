import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupFieldsDefinition } from '../../fields-definition/signup-fields-definition';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  signupFieldsDefinition!: SignupFieldsDefinition


  constructor(private fb: FormBuilder, private authService: AuthServiceService) {

  }


  ngOnInit(): void {
    this.signupFieldsDefinition = new SignupFieldsDefinition()

    this.signUpForm = this.fb.group ({
      firstName: [null,[Validators.required]],
      lastName: [null, Validators.required],
      email:[null, [Validators.required]],
      password:[null, [Validators.required, Validators.minLength(8), this.passwordValidate]],
      agreeBox:[false, Validators.requiredTrue]
    })
  }


  get signUpFormModel ()  {
    return {title: 'SIGN UP',
      formGroup: this.signUpForm,
      fields: this.signupFieldsDefinition.define()
    }
  }


  signUp() {
    if (this.signUpForm.valid) {
      const {agreeBox,...userObj} = this.signUpForm.getRawValue()
      this.authService.addUsers(userObj);
    }
  }

  passwordValidate(control: AbstractControl) {
    if(control.value === 'pranavpatil') {
      return {easyPassword: true}
    }
    return null
  } 
}
