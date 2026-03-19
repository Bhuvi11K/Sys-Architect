import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      <!-- Animated Background Grid -->
      <div class="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <!-- Glowing Orbs Background -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-cyber-cyan/30 text-cyber-cyan text-sm font-mono animate-pulse hover:shadow-glow-cyan transition-shadow">
          <div class="w-2 h-2 rounded-full bg-cyber-cyan shadow-glow-cyan"></div>
          Accepting New Enterprise Contracts
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-bold font-mono text-white mb-6 tracking-tight leading-tight max-w-5xl">
          Build <span class="text-gradient-cyan">High-Performance</span><br />
          Web Applications That Drive Revenue
        </h1>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light leading-relaxed">
          I help startups and enterprise teams architect robust <strong class="text-white font-medium">Angular</strong> & <strong class="text-white font-medium">Node.js</strong> solutions. Stop fighting legacy code and technical debt—start scaling your business with reliable architecture.
        </p>

        <!-- Metric Ribbon -->
        <div class="w-full max-w-4xl glass-panel p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-8 border-glass-border">
          <div class="flex flex-col items-center">
            <span class="text-4xl font-mono text-cyber-cyan font-bold mb-2">5+</span>
            <span class="text-sm font-mono text-gray-400 uppercase tracking-widest text-center">Years Enterprise<br/>Architecture</span>
          </div>
          <div class="hidden md:block w-px h-16 bg-glass-border"></div>
          <div class="flex flex-col items-center">
            <span class="text-4xl font-mono text-neon-purple font-bold mb-2">100%</span>
            <span class="text-sm font-mono text-gray-400 uppercase tracking-widest text-center">On-Time<br/>Delivery Rate</span>
          </div>
          <div class="hidden md:block w-px h-16 bg-glass-border"></div>
          <div class="flex flex-col items-center">
            <span class="text-4xl font-mono text-matrix-green font-bold mb-2">20+</span>
            <span class="text-sm font-mono text-gray-400 uppercase tracking-widest text-center">Scaling Products<br/>Launched</span>
          </div>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4">
          <a routerLink="/contact" mat-flat-button class="!bg-cyber-cyan !text-dark-bg !px-8 !py-6 !text-lg !rounded-none hover:shadow-glow-cyan transition-shadow">
            <mat-icon class="mr-2">rocket_launch</mat-icon>
            Discuss Your Project
          </a>
          
          <a routerLink="/case-studies" mat-stroked-button class="!border-gray-600 !text-white !px-8 !py-6 !text-lg !rounded-none hover:!border-white transition-colors">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
