import { Component, OnInit } from '@angular/core';
import {
  DatePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { PhotoPartagee } from '../models/photo-partagee';
import { PhotosPartageesService } from '../services/photos-partagees.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo-partagee-seule',
  standalone: true,
  imports: [
    DatePipe,
    NgStyle,
    NgClass,
    TitleCasePipe,
    UpperCasePipe,
    RouterLink,
  ],
  templateUrl: './photo-partagee-seule.component.html',
  styleUrl: './photo-partagee-seule.component.scss',
})
export class PhotoPartageeSeuleComponent implements OnInit {
  photoPartagee!: PhotoPartagee;

  imageLikee!: boolean;
  textBouton!: string;

  constructor(
    private photosPartageesService: PhotosPartageesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.preparerInterface();
    this.getPhoto();
  }

  /**
   * permet d'ajouter ou retirer une réaction, si l'utilisateur a déjà réagit ou non
   */
  onToggleReaction() {
    if (!this.imageLikee) {
      this.ajouterReaction();
    } else {
      this.retirerReaction();
    }
  }

  /**
   * incrémente au nombre de réaction et change la valeur du bouton
   */
  ajouterReaction() {
    this.photosPartageesService.reagirALaPhotoParId(
      this.photoPartagee.id,
      'Réagie'
    );
    this.imageLikee = true;
    this.textBouton = 'Nope nope nope';
  }

  /**
   * décrémente au nombre de réaction et change la valeur du bouton
   */
  retirerReaction() {
    this.photosPartageesService.reagirALaPhotoParId(
      this.photoPartagee.id,
      'Non réagie'
    );
    this.imageLikee = false;
    this.textBouton = 'Ouh lalaaaaa';
  }
  /**
   * permet de voir quand l'utilisateur a déjà réagit ou non
   * @returns boolean
   */
  isPhotoLikee() {
    return this.imageLikee;
  }

  private getPhoto(): void {
    const idPhoto = this.route.snapshot.params['id'];
    this.photoPartagee = this.photosPartageesService.getPhotoParId(idPhoto);
  }

  private preparerInterface() {
    this.imageLikee = false;
    this.textBouton = 'Ouh lalaaaaa';
  }
}
