import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthServiceService);
  const router = inject(Router)
  if (authServ.isAuthenticated()) {
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }
};
