import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DesktopNavComponent } from '../desktop-nav/desktop-nav.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  imports: [RouterModule, DesktopNavComponent, MobileNavComponent],
  selector: 'app-header',
  template: `<header>
    <div class="container">
      <a [routerLink]="'/'">✨Logo✨</a>
      <app-desktop-nav class="desktop-nav"></app-desktop-nav>
      <app-mobile-nav class="mobile-nav"></app-mobile-nav>
    </div>
  </header>`,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
