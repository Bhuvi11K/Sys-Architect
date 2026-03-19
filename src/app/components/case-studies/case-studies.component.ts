import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss',
})
export class CaseStudiesComponent { }
