import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 w-full z-50 glass-panel border-b-0 rounded-none px-6 py-4 flex justify-between items-center transition-all duration-300">
      <div class="flex items-center gap-2 cursor-pointer" routerLink="/">
        <div class="w-8 h-8 rounded bg-gradient-to-br from-cyber-cyan to-neon-purple shadow-glow-cyan"></div>
        <span class="font-mono font-bold text-xl tracking-wider text-white">SYS.ARCHITECT</span>
      </div>

      <!-- Desktop Nav -->
      <div class="hidden md:flex gap-8 items-center">
        <a routerLink="/expertise" routerLinkActive="!text-cyber-cyan" class="text-sm uppercase tracking-widest hover:text-cyber-cyan transition-colors">Expertise</a>
        <a routerLink="/projects" routerLinkActive="!text-neon-purple" class="text-sm uppercase tracking-widest hover:text-neon-purple transition-colors">Projects</a>
        <a routerLink="/contact" mat-stroked-button color="primary" class="!border-cyber-cyan !text-cyber-cyan hover:!bg-cyber-cyan/10">
          Initialize Contact
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button mat-icon-button class="md:hidden !text-cyber-cyan" (click)="toggleMenu()">
        <mat-icon>{{ isMenuOpen() ? 'close' : 'menu' }}</mat-icon>
      </button>

      <!-- Mobile Menu Dropdown -->
      @if (isMenuOpen()) {
        <div class="absolute top-full left-0 w-full glass-panel border-t border-glass-border rounded-none flex flex-col p-6 gap-4 md:hidden shadow-lg animate-in fade-in slide-in-from-top-4">
          <a routerLink="/expertise" routerLinkActive="!text-cyber-cyan" class="py-2 text-lg hover:text-cyber-cyan transition-colors" (click)="toggleMenu()">Expertise</a>
          <a routerLink="/projects" routerLinkActive="!text-neon-purple" class="py-2 text-lg hover:text-neon-purple transition-colors" (click)="toggleMenu()">Projects</a>
          <a routerLink="/contact" mat-flat-button color="primary" class="!bg-cyber-cyan !text-dark-bg mt-4" (click)="toggleMenu()">
            Initialize Contact
          </a>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
