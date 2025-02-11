import { Component } from '@angular/core';
import { TitleComponent } from '../ui/title/title.component';
import { FormComponent } from '../ui/form/form.component';
import { LabelComponent } from '../ui/label/label.component';
import { TextInputComponent } from '../ui/text-input/text-input.component';
import { SubmitButtonComponent } from '../ui/submit-button/submit-button.component';

@Component({
  selector: 'app-login',
  imports: [
    FormComponent,
    LabelComponent,
    SubmitButtonComponent,
    TextInputComponent,
    TitleComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
