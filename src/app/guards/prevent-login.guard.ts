import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';

export const preventLoginGuard: CanActivateFn = (route, state): boolean | 
Observable<boolean> | 
Promise<boolean> => {

  const authServ = inject(AuthServiceService);
  const router = inject(Router);

  if (authServ.isAuthenticated()) {
    router.navigate(['/home']);
    return false;
    

  }
  else {
    return true
  }
  // return authServ.isAuthenticated() ? false : true;
  
};
