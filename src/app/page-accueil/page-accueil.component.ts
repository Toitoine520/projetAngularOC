import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss',
})
export class PageAccueilComponent {

  userEmail: string = "mon.adresse@email.com";

  constructor(private router: Router) {}

  /**
   * Permet d'aller à la liste des photos partagees
   */
  onContinue() {
    this.router.navigateByUrl('photospartagees');
  }

  onSubmitForm(formulaire: NgForm): void {
    console.log(formulaire.value);
  }
}
