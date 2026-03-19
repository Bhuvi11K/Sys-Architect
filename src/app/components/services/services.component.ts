import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ...MATERIAL_IMPORTS, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent { }
