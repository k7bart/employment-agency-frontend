import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSnackBarComponent } from '../components/ui/error-snack-bar/error-snack-bar.component';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      snackBar.openFromComponent(ErrorSnackBarComponent, {
        data: { message: err.error.message || 'An unknown error occurred 😵‍💫' },
        duration: 3 * 1000,
      });

      return throwError(() => err);
    }),
  );
};
