import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
  { path: '', component: HeroComponent, title: 'Bhuvanesh | Full-Stack Developer' },
  { path: 'about', component: AboutComponent, title: 'Bhuvanesh | About' },
  { path: 'services', component: ServicesComponent, title: 'Bhuvanesh | Services' },
  { path: 'case-studies', component: CaseStudiesComponent, title: 'Bhuvanesh | Case Studies' },
  { path: 'contact', component: ContactComponent, title: 'Bhuvanesh | Contact' },
  { path: '**', redirectTo: '' }
];
