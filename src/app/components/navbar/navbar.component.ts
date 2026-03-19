import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // Mobile menu state
  isMenuOpen = signal(false);

  // Theme state (defaulting to dark based on the sleek dark gray request)
  isDarkMode = signal(true);

  constructor() {
    // When the component initializes, ensure the html class matches the default state
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
