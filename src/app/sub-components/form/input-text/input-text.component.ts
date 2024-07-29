import { Component, Input } from '@angular/core';
import { BasecontrolComponent } from '../../../basecontrol/basecontrol.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextInputModel } from '../../../models/text-input-model';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:InputTextComponent,
      multi: true
    }
  ]
})
export class InputTextComponent extends BasecontrolComponent {
  @Input() inputModel!: TextInputModel;



  writeValue(value: any): void {
    this.value = value;
  }

  onInput(event:any) {
    this.value = event.target.value;
    this.onChange(this.value)
  }
}
