import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ...MATERIAL_IMPORTS],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent { }
