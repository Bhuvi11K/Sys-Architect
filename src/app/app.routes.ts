import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent, title: 'SYS.ARCHITECT | Home' },
  { path: 'expertise', component: ExpertiseComponent, title: 'SYS.ARCHITECT | Expertise' },
  { path: 'projects', component: ProjectsComponent, title: 'SYS.ARCHITECT | Projects' },
  { path: 'contact', component: ContactComponent, title: 'SYS.ARCHITECT | Contact' },
  { path: '**', redirectTo: '' }
];
