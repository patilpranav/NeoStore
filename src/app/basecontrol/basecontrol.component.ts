// basecontrol.component.ts
import { Component, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-basecontrol',
  template: ``,
  styles: ``
})
export abstract class BasecontrolComponent implements ControlValueAccessor {
  disabled!: boolean;
  value: any;
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor(@Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  abstract writeValue(value: any): void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
