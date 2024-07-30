// input-text.component.ts
import { Component, forwardRef, Input, Optional, Self } from '@angular/core';
import { BasecontrolComponent } from '../../../basecontrol/basecontrol.component';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { TextInputModel } from '../../../models/text-input-model';
import { ErrorMessage } from '../../../models/error-message';



@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent extends BasecontrolComponent {
  @Input() inputModel!: TextInputModel;

  writeValue(value: any): void {
    this.value = value;
  }

  onInput(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    
  }


  get errorList() {
    const errors = this.ngControl.errors as object;
    if(!errors) return [];
    return Object.keys(errors);
    
  }


  get errorMessage(): ErrorMessage {
    return {
      'required':  'This Field is Required',
      'easyPassword':'Password is too easy to guess',
      'minlength': 'Passwor is too short'
    }
  }
}
