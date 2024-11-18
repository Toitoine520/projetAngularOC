import { Component, Input, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { PhotoPartagee } from '../models/photo-partagee';
import { PhotosPartageesService } from '../services/photos-partagees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-partagee',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './photo-partagee.component.html',
  styleUrl: './photo-partagee.component.scss',
})
export class PhotoPartageeComponent {
  @Input() photoPartagee!: PhotoPartagee;

  imageLikee!: boolean;
  textBouton!: string;

  constructor(private router: Router) {}

  montrerPhoto() {
    this.router.navigateByUrl(`photospartagees/${this.photoPartagee.id}`);
  }
}
