import { Component } from '@angular/core';
import { PhotoPartageeComponent } from './photo-partagee/photo-partagee.component';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PhotoPartageeComponent,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    HeaderComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
