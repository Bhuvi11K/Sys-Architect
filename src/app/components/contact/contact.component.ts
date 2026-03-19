import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private snackBar = inject(MatSnackBar);

  name = signal('');
  email = signal('');
  details = signal('');

  isFormValid = computed(() => {
    return this.name().trim() !== '' && this.email().includes('@') && this.details().trim() !== '';
  });

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Payload transmitted:', {
        name: this.name(),
        email: this.email(),
        details: this.details(),
      });

      this.snackBar.open('System response: Transmission secure. Architect notified.', 'ACK', {
        duration: 5000,
        panelClass: ['bg-cyber-cyan', 'text-dark-bg', 'font-mono', 'shadow-glow-cyan'],
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });

      this.name.set('');
      this.email.set('');
      this.details.set('');
    }
  }
}
