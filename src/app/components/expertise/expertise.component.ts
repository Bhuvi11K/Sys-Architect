import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section id="expertise" class="py-12 md:py-24 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute right-0 top-0 w-[800px] h-[800px] bg-cyber-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10">
        
        <div class="text-center mb-16 max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-5xl font-mono text-white mb-6">Core <span class="text-gradient-purple">Expertise</span></h2>
          <div class="h-1 w-24 bg-gradient-to-r from-neon-purple to-cyber-cyan mx-auto rounded-full mb-8"></div>
          <p class="text-xl text-gray-300 leading-relaxed font-light">
            I utilize an <strong class="text-white font-medium">Architecture-First Methodology</strong>. Before writing a single line of code, we align on your business objectives to design scalable systems that won't require costly rewrites in 6 months.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          
          <!-- Card 1 -->
          <div class="glass-panel p-8 flex-1 group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div class="w-16 h-16 rounded-2xl bg-cyber-cyan/10 flex items-center justify-center mb-6 group-hover:shadow-glow-cyan transition-shadow">
              <mat-icon class="!text-cyber-cyan !w-8 !h-8 text-[32px]">architecture</mat-icon>
            </div>
            <h3 class="text-2xl font-mono text-white mb-4">Frontend Architecture</h3>
            <p class="text-gray-400 leading-relaxed mb-6">
              Designing scalable, modular Angular infrastructures engineered for massive enterprise applications.
            </p>
            <ul class="space-y-3 mt-auto border-t border-glass-border pt-6">
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-cyber-cyan mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>Standalone Components & Zoneless CD</span>
              </li>
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-cyber-cyan mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>RxJS / NgRx State Management</span>
              </li>
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-cyber-cyan mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>Micro-Frontend Interoperability</span>
              </li>
            </ul>
          </div>

          <!-- Card 2 -->
          <div class="glass-panel p-8 flex-1 group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div class="w-16 h-16 rounded-2xl bg-matrix-green/10 flex items-center justify-center mb-6 group-hover:shadow-glow-green transition-shadow">
              <mat-icon class="!text-matrix-green !w-8 !h-8 text-[32px]">api</mat-icon>
            </div>
            <h3 class="text-2xl font-mono text-white mb-4">Backend & APIs</h3>
            <p class="text-gray-400 leading-relaxed mb-6">
              Developing robust, highly-concurrent microservices that serve data instantly without breaking under load.
            </p>
            <ul class="space-y-3 mt-auto border-t border-glass-border pt-6">
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-matrix-green mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>Node.js / Express / NestJS APIs</span>
              </li>
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-matrix-green mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>PostgreSQL / MongoDB Optimization</span>
              </li>
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-matrix-green mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>Auth, WebSockets & Real-Time Data</span>
              </li>
            </ul>
          </div>

          <!-- Card 3 -->
          <div class="glass-panel p-8 flex-1 group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div class="w-16 h-16 rounded-2xl bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:shadow-glow-purple transition-shadow">
              <mat-icon class="!text-neon-purple !w-8 !h-8 text-[32px]">design_services</mat-icon>
            </div>
            <h3 class="text-2xl font-mono text-white mb-4">UI Implementation</h3>
            <p class="text-gray-400 leading-relaxed mb-6">
              Translating Figma prototypes into pixel-perfect, accessible, and responsive visual masterpieces.
            </p>
            <ul class="space-y-3 mt-auto border-t border-glass-border pt-6">
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-neon-purple mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>Tailwind CSS Architecture</span>
              </li>
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-neon-purple mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>Fluid Micro-Animations</span>
              </li>
              <li class="flex items-start text-gray-300">
                <mat-icon class="!text-neon-purple mr-3 text-sm flex-shrink-0 mt-1">check_circle</mat-icon>
                <span>Component Library Overrides (M3)</span>
              </li>
            </ul>
          </div>

        </div>
        
        <!-- Technology Arsenal Banner -->
        <div class="mt-20 border-y border-glass-border py-8 text-center bg-black/20">
            <h4 class="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">The Technology Arsenal</h4>
            <div class="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70">
                <span class="font-mono text-xl text-white font-bold">ANGULAR</span>
                <span class="font-mono text-xl text-white font-bold">NODE.JS</span>
                <span class="font-mono text-xl text-white font-bold">TYPESCRIPT</span>
                <span class="font-mono text-xl text-white font-bold">TAILWIND</span>
                <span class="font-mono text-xl text-white font-bold">POSTGRESQL</span>
                <span class="font-mono text-xl text-white font-bold">RXJS</span>
            </div>
        </div>

      </div>
    </section>
  `
})
export class ExpertiseComponent {}
