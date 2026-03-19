import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

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
  imports: [CommonModule, ...MATERIAL_IMPORTS],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
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
