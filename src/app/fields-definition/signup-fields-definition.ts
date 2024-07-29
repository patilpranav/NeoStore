
import {  TextInputModel } from "../models/text-input-model";

export class SignupFieldsDefinition {
    firstName!:TextInputModel;
    lastName!: TextInputModel;
    email!: TextInputModel;
    password!: TextInputModel;
    checkBox!: TextInputModel

    definitionFields: TextInputModel[];
    constructor() {
        this.firstName = {
            type:'text',
            label:'',
            formControlName:'firstName',
            required:true,
            placeHolder: 'First Name'
        },

        this.lastName = {
            type:'text',
            label:'',
            formControlName:'lastName',
            required:true,
            placeHolder: 'Last Name'
        },

        this.email = {
            type:'email',
            label:'',
            formControlName:'email',
            required:true,
            placeHolder: 'Email Address'
        },

    this.password = {
        type:'password',
        label:'',
        formControlName:'password',
        required:true,
        placeHolder: 'Password',
        forgotPassword: false
    }

    this.checkBox = {
        type: 'checkbox',
        label:'I agree to the terms and conditions.',
        formControlName: 'agreeBox',
        required: true,
    }

    this.definitionFields = [this.firstName,this.lastName, this.email, this.password, this.checkBox]
    }


    define() {
        return this.definitionFields;
    }
}
