import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupFieldsDefinition } from '../../fields-definition/signup-fields-definition';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  signupFieldsDefinition!: SignupFieldsDefinition


  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.signupFieldsDefinition = new SignupFieldsDefinition()

    this.signUpForm = this.fb.group ({
      firstName: [null,[Validators.required]],
      lastName: [null, Validators.required],
      email:[null, Validators.required],
      password:[null, Validators.required],
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
    console.log(this.signUpForm)
  }
}
