import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'neoStore';
  show: boolean = true;

  nos = 3;

  ngOnInit() {
    
  }

  showHeader() {
    this.show = false;
  }

  ngOnDestroy(): void {
    alert('Destroyed')
  }



  
}
