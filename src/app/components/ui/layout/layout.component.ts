import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent],
  styleUrl: './layout.component.css',

  template: `
    <app-header></app-header>
    <main>
      <section>
        <router-outlet> </router-outlet>
      </section>
    </main>
  `,
})
export class LayoutComponent {}
