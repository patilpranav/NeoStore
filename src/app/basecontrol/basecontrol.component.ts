import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-basecontrol',
  template: ``,
  styles: ``
})
export abstract class BasecontrolComponent implements ControlValueAccessor {
  disabled!:boolean;
  value:any;
  onChange:(value:any) => void = () => {};
  onTouched:() => void = () => {};

  constructor() {
  }

  abstract writeValue(value:any) : void

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
