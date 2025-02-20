import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent],

  template: `
    <app-header></app-header>
    <main>
      <router-outlet> </router-outlet>
    </main>
  `,
})
export class LayoutComponent {}
