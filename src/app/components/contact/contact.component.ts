import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    MatSnackBarModule
  ],
  template: `
    <section id="contact" class="py-12 md:py-24 relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 relative z-10">
          
          <!-- Left Info Panel (Expanded) -->
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 class="text-3xl md:text-5xl font-mono text-white mb-6">Initialize<br /><span class="text-gradient-cyan">Connection</span>.</h2>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">
              Partner with a dedicated architect. I specialize in taking over complex, stranded codebases or building high-performance systems from the ground up.
            </p>
            
            <div class="space-y-6 mb-12">
              <div class="flex items-center gap-4 text-gray-300">
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-sm">
                  <mat-icon class="!text-cyber-cyan">location_on</mat-icon>
                </div>
                <div>
                  <div class="text-sm text-gray-500 font-mono uppercase tracking-wider mb-1">Base Node</div>
                  <div class="font-medium text-white">Tamil Nadu, IN (Global Remote)</div>
                </div>
              </div>
              
              <div class="flex items-center gap-4 text-gray-300">
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-sm">
                  <mat-icon class="!text-neon-purple">email</mat-icon>
                </div>
                <div>
                  <div class="text-sm text-gray-500 font-mono uppercase tracking-wider mb-1">Direct Comms</div>
                  <div class="font-medium text-white">hello&#64;sysarchitect.dev</div>
                </div>
              </div>
            </div>

            <!-- Client FAQs (New Section) -->
            <div class="glass-panel p-6 border-glass-border">
              <h3 class="text-lg font-mono text-white mb-4 border-b border-glass-border pb-2">Frequently Asked Parameters</h3>
              
              <div class="mb-4">
                <h4 class="font-medium text-cyber-cyan mb-1 flex items-center gap-2">
                  <mat-icon class="text-sm h-4 w-4">help_outline</mat-icon> What is your typical timeline?
                </h4>
                <p class="text-sm text-gray-400 leading-relaxed pl-6">Most MVP architectures are delivered in 6-8 weeks, with enterprise migrations taking 3-6 months based on scope.</p>
              </div>

              <div>
                <h4 class="font-medium text-cyber-cyan mb-1 flex items-center gap-2">
                  <mat-icon class="text-sm h-4 w-4">help_outline</mat-icon> Do you work with existing teams?
                </h4>
                <p class="text-sm text-gray-400 leading-relaxed pl-6">Absolutely. I frequently integrate into existing Agile teams as an external Lead/Architect to accelerate delivery.</p>
              </div>
            </div>

          </div>

          <!-- Right Form Container (Signal Form) -->
          <div class="w-full lg:w-7/12 glass-panel p-8 md:p-12 border-glass-border self-start">
            <h3 class="text-2xl font-mono text-white mb-2">System Query Form</h3>
            <p class="text-gray-400 mb-8">Transmit your project specifications securely below. Expect a response within 24 hours.</p>

            <form class="flex flex-col gap-6" (ngSubmit)="onSubmit()">
              
              <!-- Material Input overrides via Tailwind classes to fit the theme -->
              <mat-form-field appearance="outline" class="w-full cyber-input">
                <mat-label>Designation / Name</mat-label>
                <input matInput [ngModel]="name()" (ngModelChange)="name.set($event)" name="name" required placeholder="John Doe">
                <mat-icon matPrefix class="mr-2 !text-gray-500">person_outline</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full cyber-input">
                <mat-label>Comms Link (Email)</mat-label>
                <input matInput type="email" [ngModel]="email()" (ngModelChange)="email.set($event)" name="email" required placeholder="john@company.com">
                <mat-icon matPrefix class="mr-2 !text-gray-500">mail_outline</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full cyber-input">
                <mat-label>Project Parameters & ROI Goals</mat-label>
                <textarea matInput rows="6" [ngModel]="details()" (ngModelChange)="details.set($event)" name="details" required placeholder="Describe your architecture requirements, timeline, and business objectives..."></textarea>
              </mat-form-field>

              <button 
                mat-flat-button 
                type="submit" 
                [disabled]="!isFormValid()"
                class="!py-7 !text-lg !rounded-none mt-4 transition-all duration-300 shadow-lg"
                [class.!bg-cyber-cyan]="isFormValid()"
                [class.!text-dark-bg]="isFormValid()"
                [class.hover:shadow-glow-cyan]="isFormValid()"
                [class.!bg-gray-800]="!isFormValid()"
                [class.!text-gray-500]="!isFormValid()">
                <mat-icon class="mr-2 pb-1">send</mat-icon>
                Transmit Payload
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Overriding Material form field styles to match the cyberpunk aesthetic */
    ::ng-deep .cyber-input .mat-mdc-text-field-wrapper {
      background-color: rgba(0,0,0,0.3) !important;
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.3s ease;
      border-radius: 4px;
    }
    ::ng-deep .cyber-input.mat-focused .mat-mdc-text-field-wrapper {
      border-color: #00f3ff !important;
      box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
    }
    ::ng-deep .cyber-input .mat-mdc-form-field-focus-overlay {
      background-color: transparent !important;
    }
    ::ng-deep .cyber-input input, ::ng-deep .cyber-input textarea, ::ng-deep .cyber-input mat-label {
      color: #e5e7eb !important;
    }
    ::ng-deep .cyber-input .mdc-notched-outline__leading,
    ::ng-deep .cyber-input .mdc-notched-outline__notch,
    ::ng-deep .cyber-input .mdc-notched-outline__trailing {
      border: none !important;
    }
    ::ng-deep .cyber-input.mat-focused mat-label {
      color: #00f3ff !important;
    }
  `]
})
export class ContactComponent {
  private snackBar = inject(MatSnackBar);

  name = signal('');
  email = signal('');
  details = signal('');

  isFormValid = computed(() => {
    return this.name().trim() !== '' && 
           this.email().includes('@') && 
           this.details().trim() !== '';
  });

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Payload transmitted:', {
        name: this.name(),
        email: this.email(),
        details: this.details()
      });

      this.snackBar.open('System response: Transmission secure. Architect notified.', 'ACK', {
        duration: 5000,
        panelClass: ['bg-cyber-cyan', 'text-dark-bg', 'font-mono', 'shadow-glow-cyan'],
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      });

      this.name.set('');
      this.email.set('');
      this.details.set('');
    }
  }
}
