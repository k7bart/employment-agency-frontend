import { Component } from '@angular/core';
import { DesktopNavComponent } from '../desktop-nav/desktop-nav.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  imports: [DesktopNavComponent, MobileNavComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
