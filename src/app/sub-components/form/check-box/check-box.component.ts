import { Component, Input, OnInit } from '@angular/core';
import { BasecontrolComponent } from '../../../basecontrol/basecontrol.component';
import { isPlatformBrowser } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextInputModel } from '../../../models/text-input-model';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss',
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:CheckBoxComponent,
      multi: true
    }
  ]
})
export class CheckBoxComponent extends BasecontrolComponent {
  @Input() inputModel!: TextInputModel;


  writeValue(value: any): void {
    this.value = value;
  }

  checkValue(event:any) {
    this.value = event.target.checked;
    this.onChange(this.value)
  }

}
