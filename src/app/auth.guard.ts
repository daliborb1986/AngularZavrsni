import { CanActivateFn, Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
