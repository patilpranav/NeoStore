import { Directive } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appLogger]',
  // providers:[LoggerService]
})
export class LoggerDirective {

  constructor(private logS: LoggerService) {
    logS.sayHi();
   }

}
