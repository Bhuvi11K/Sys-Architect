import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen pt-32 pb-24 px-6 relative flex items-center">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-4xl md:text-5xl font-mono font-bold text-white mb-12">
          I don’t just write code.<br />
          <span class="text-cyber-cyan">I build business solutions.</span>
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
          <div>
            <p class="mb-6">
              Hi, I'm <strong class="text-white">Bhuvanesh</strong>. Over the last 5+ years, I've specialized in full-stack architecture, transforming slow, heavily-leveraged applications into high-speed, revenue-driving engines.
            </p>
            <p>
              I work primarily with <strong class="text-neon-purple">Angular</strong>, <strong class="text-matrix-green">Node.js</strong>, and MSSQL. Whether it's an enterprise dashboard or a real-time API, I engineer for long-term growth.
            </p>
          </div>
          
          <div class="glass-panel p-8 border-glass-border">
            <h3 class="text-xl font-mono text-white mb-6">My Approach</h3>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <div class="w-2 h-2 mt-2 rounded-full bg-cyber-cyan shadow-glow-cyan flex-shrink-0"></div>
                <div>
                  <strong class="text-white block mb-1">Agile & Proactive</strong>
                  <span class="text-sm">I don't wait for instructions; I architect scalable solutions and communicate constantly.</span>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="w-2 h-2 mt-2 rounded-full bg-neon-purple shadow-glow-purple flex-shrink-0"></div>
                <div>
                  <strong class="text-white block mb-1">Business-First</strong>
                  <span class="text-sm">Every technical decision is weighed against your bottom line and time-to-market.</span>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="w-2 h-2 mt-2 rounded-full bg-matrix-green shadow-glow-green flex-shrink-0"></div>
                <div>
                  <strong class="text-white block mb-1">Future-Proof</strong>
                  <span class="text-sm">I deliver clean, documented code that your team will actually enjoy working with.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
