import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-8 border-t border-glass-border bg-dark-bg text-center">
      <div class="container mx-auto px-6">
        <p class="text-gray-500 font-mono text-sm">
          &copy; {{ currentYear }} <span class="text-cyber-cyan">SYS.ARCHITECT</span> // Bhuvanesh. All systems operational.
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
