import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent { }
