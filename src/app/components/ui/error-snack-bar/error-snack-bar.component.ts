import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-snack-bar',
  template: `<span>{{ data.message }}</span>`,
})
export class ErrorSnackBarComponent {
  data = inject(MAT_SNACK_BAR_DATA);
}
