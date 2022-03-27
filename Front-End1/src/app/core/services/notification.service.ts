
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ToastComponent } from '../pages/components/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'end',
    verticalPosition: 'top'
  }

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showSuccesMessage(message?: string) {
    this.snackBar.openFromComponent(ToastComponent, {
      horizontalPosition: this.config.horizontalPosition,
      verticalPosition: this.config.verticalPosition,
      panelClass: 'toast-success-message',
      duration: this.config.duration,
      data: {
        icon: 'done_outline',
        message: message ? message : 'Success'
      }
    })
  }

  showErrorMessage(message?: string) {
    this.snackBar.openFromComponent(ToastComponent, {
      horizontalPosition: this.config.horizontalPosition,
      verticalPosition: this.config.verticalPosition,
      panelClass: 'toast-error-message',
      duration: this.config.duration,
      data: {
        icon: 'error_outline',
        message: message ? message : 'Error'
      }
    })
  }
}