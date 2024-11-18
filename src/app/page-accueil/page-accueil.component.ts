import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss',
})
export class PageAccueilComponent {
  constructor(private router: Router) {}

  onContinue() {
    this.router.navigateByUrl('photospartagees');
  }
}
