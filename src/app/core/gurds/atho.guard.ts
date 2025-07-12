import { CanActivateFn } from '@angular/router';

export const athoGuard: CanActivateFn = (route, state) => {
  return true;
};
