import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent { }
