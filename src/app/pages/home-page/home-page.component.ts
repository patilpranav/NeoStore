import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { LoggerService } from '../../logger.service';

export interface Iproduct{
  title: string,
  desc: string,
  rating: number

}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers:[LoggerService]
})
export class HomePageComponent  {
  constructor(private authServ: AuthServiceService) {
    
  }
  logout() {
    this.authServ.logout();
  }

}
