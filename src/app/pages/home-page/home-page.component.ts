import { Component, ViewEncapsulation, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { interval, shareReplay } from 'rxjs';

export interface Iproduct{
  title: string,
  desc: string,
  rating: number

}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'

})
export class HomePageComponent  {
  
  
  constructor(private authServ: AuthServiceService) {

    
  }
  logout() {
    this.authServ.logout();
  }

}
