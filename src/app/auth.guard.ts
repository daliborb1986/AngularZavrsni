import { CanActivateFn, Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
