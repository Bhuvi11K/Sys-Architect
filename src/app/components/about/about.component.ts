import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent { }
