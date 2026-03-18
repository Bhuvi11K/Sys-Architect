import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Project {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  imagePlaceholder: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    <section id="projects" class="py-12 md:py-24 relative bg-glass-bg border-y border-glass-border">
      <div class="container mx-auto px-6">
        
        <div class="text-center mb-16 flex flex-col items-center">
          <div class="flex items-center gap-2 mb-4">
            <mat-icon class="!text-neon-purple animate-pulse">terminal</mat-icon>
            <span class="font-mono text-neon-purple uppercase tracking-widest text-sm">System Registry</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-mono text-white mb-4">Featured <span class="text-gradient-cyan">Deployments</span></h2>
          <p class="text-gray-400 max-w-2xl text-lg mb-8">Case studies demonstrating tangible business ROI achieved through modern architecture.</p>
        </div>

        <div class="flex flex-col gap-16">
          
          @for (project of projects; track project.title; let i = $index) {
            <article class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center glass-panel p-6 lg:p-10 group overflow-hidden border-glass-border">
              
              <!-- Image Placeholder Container -->
              <div class="w-full lg:w-5/12 relative rounded-xl overflow-hidden aspect-video lg:aspect-square bg-dark-bg border border-glass-border isolate shadow-lg">
                <!-- Fallback abstract visual -->
                <div class="absolute inset-0 bg-gradient-to-br" [class]="getGradient(i) + ' opacity-20 group-hover:opacity-40 transition-opacity duration-500'"></div>
                <div class="absolute inset-0 flex items-center justify-center font-mono text-gray-500 opacity-50 text-xl md:text-2xl tracking-widest uppercase text-center p-6">
                  {{ project.imagePlaceholder }}
                </div>
                
                <!-- Overlay glow -->
                <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-bg to-transparent"></div>
              </div>

              <!-- Content Container -->
              <div class="w-full lg:w-7/12 flex flex-col">
                <div class="flex items-center gap-3 mb-4">
                  <span class="font-mono text-sm text-cyber-cyan font-bold">CASE_0{{ i + 1 }}</span>
                  <div class="h-[1px] w-12 bg-cyber-cyan/30"></div>
                </div>
                
                <h3 class="text-3xl lg:text-4xl font-bold font-mono text-white mb-4 leading-tight">{{ project.title }}</h3>
                <p class="text-gray-300 leading-relaxed mb-8 text-lg">{{ project.description }}</p>

                <!-- Value/ROI Metrics -->
                <div class="bg-black/30 rounded-lg p-6 mb-8 border border-white/5">
                  <h4 class="text-sm font-mono text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <mat-icon class="!text-matrix-green text-sm h-5 w-5">insights</mat-icon>
                    Key Outcomes
                  </h4>
                  <ul class="space-y-3">
                    @for (achievement of project.achievements; track achievement) {
                      <li class="flex items-start text-gray-300">
                        <mat-icon class="!text-matrix-green mr-3 text-sm flex-shrink-0 mt-1">trending_up</mat-icon>
                        <span class="leading-relaxed">{{ achievement }}</span>
                      </li>
                    }
                  </ul>
                </div>

                <!-- Tech Stack Chips -->
                <div class="flex flex-wrap gap-2 mb-8">
                  @for (tech of project.technologies; track tech) {
                    <span class="px-3 py-1 text-sm font-mono rounded bg-white/5 border border-white/10 text-gray-300 shadow-sm">
                      {{ tech }}
                    </span>
                  }
                </div>

                <div class="flex gap-4 mt-auto">
                  <button mat-flat-button class="!bg-white !text-dark-bg !rounded-none !px-6 hover:shadow-glow-cyan transition-shadow">
                    View Live <mat-icon class="ml-2">open_in_new</mat-icon>
                  </button>
                  <button mat-icon-button class="!border !border-glass-border !text-gray-400 hover:!text-white hover:!bg-white/5 transition-colors">
                    <mat-icon>code</mat-icon>
                  </button>
                </div>
              </div>

            </article>
          }
          
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'High-Performance Operations Dashboard',
      description: 'Architected and developed a real-time data visualization dashboard capable of rendering and filtering massive datasets with zero UI latency, serving as the central nervous system for a global logistics firm.',
      achievements: [
        'Reduced data rendering latency from 4.2 seconds to under 200ms using RxJS web workers and Zoneless Angular 19+ constructs.',
        'Migrated legacy monolithic frontend to 4 scalable Micro-Frontends seamlessly.',
        'Increased user session retention by 45% due to significantly improved UX.'
      ],
      technologies: ['Angular 21', 'ag-Grid', 'RxJS', 'Tailwind CSS', 'Redux'],
      imagePlaceholder: '[ GLOBAL LOGISTICS DASHBOARD ]'
    },
    {
      title: 'Enterprise Scheduling System',
      description: 'Engineered a critical hospital maintenance scheduling portal, mapping complex API payloads into intuitive drag-and-drop calendar interfaces used by 500+ daily healthcare administrators.',
      achievements: [
        'Eliminated double-booking errors completely via robust transactional API architecture.',
        'Optimized Postgres querying, cutting calendar load times by 60%.',
        'Implemented rigorous Role-Based Access Control (RBAC) ensuring HIPAA compliance.'
      ],
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Express', 'FullCalendar'],
      imagePlaceholder: '[ HEALTHCARE SCHEDULER ]'
    },
    {
      title: 'Secure FinTech Audit Portal',
      description: 'Implemented a highly secure administrative dashboard featuring dynamic routing, granular permissions, and real-time audit log tracking for a rising FinTech startup.',
      achievements: [
        'Passed rigorous third-party security audits with zero Priority 1 vulnerabilities.',
        'Built real-time websocket integration capable of streaming 10,000+ log events per minute.',
        'Designed accessible Material 3 component overlays passing WCAG AA standards.'
      ],
      technologies: ['Angular Signals', 'WebSockets', 'Tailwind', 'Node.js'],
      imagePlaceholder: '[ FINTECH AUDIT LEDGER ]'
    }
  ];

  getGradient(index: number): string {
    const gradients = [
      'from-cyber-cyan to-blue-900',
      'from-matrix-green to-emerald-900',
      'from-neon-purple to-purple-900'
    ];
    return gradients[index % gradients.length];
  }
}
