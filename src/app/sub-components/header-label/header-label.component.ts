import { Component, ViewEncapsulation } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-header-label',
  templateUrl: './header-label.component.html',
  styleUrl: './header-label.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class HeaderLabelComponent {

  ngOnInit() {

    const obser = {
      next: (data:any) => {
        console.log(data)
      },
      error: (err:any) => {
        console.error(err);
      },
      complete: ()=> {
        console.log('completed')
      },
      say: ()=> {
        console.log('hey there');
      }
    }
    let obs = from([1,2,3,4,5,6]);
  }

}
