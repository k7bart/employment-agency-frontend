import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

import { H2TitleComponent } from '../../ui/h2-title/h2-title.component';
import { SubmitButtonComponent } from '../../ui/submit-button/submit-button.component';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, SubmitButtonComponent, H2TitleComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private readonly fb = inject(FormBuilder);

  readonly authService = inject(AuthService);

  readonly signupForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    { validators: this.passwordsMatchValidator },
  );

  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const { password, confirmPassword } = control.value || {};
    return password && confirmPassword && password !== confirmPassword
      ? { passwordsMismatch: true }
      : null;
  }

  onSubmit(): void {
    if (!this.signupForm.valid) {
      return;
    }

    const { email, password } = this.signupForm.value;
    this.authService.signup(email, password);
  }
}
