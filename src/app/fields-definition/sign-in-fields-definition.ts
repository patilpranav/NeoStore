import { TextInputModel } from "../models/text-input-model";

export class SignInFieldsDefinition {
    email!:TextInputModel;
    password!: TextInputModel
    definitionFields: TextInputModel[];
    constructor() {
        this.email = {
            type:'email',
            label:'Email',
            formControlName:'email',
            required:true,
            placeHolder: 'youremail@address.coms'
        },

    this.password = {
        type:'password',
        label:'Password',
        formControlName:'password',
        required:true,
        placeHolder: '',
        forgotPassword: true
    }

    this.definitionFields = [this.email,this.password]
    }


    define() {
        return this.definitionFields;
    }
}
