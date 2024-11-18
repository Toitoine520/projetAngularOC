import { Component, Input, OnInit } from '@angular/core';
import { PhotoPartagee } from '../models/photo-partagee';
import { PhotoPartageeComponent } from '../photo-partagee/photo-partagee.component';
import { PhotosPartageesService } from '../services/photos-partagees.service';

@Component({
  selector: 'app-liste-photos-partagees',
  standalone: true,
  imports: [PhotoPartageeComponent],
  templateUrl: './liste-photos-partagees.component.html',
  styleUrl: './liste-photos-partagees.component.scss',
})
export class ListePhotosPartageesComponent implements OnInit {
  photosPartagees!: PhotoPartagee[];

  constructor(private photosPartageesService: PhotosPartageesService) {}

  ngOnInit(): void {
    this.photosPartagees = this.photosPartageesService.getPhotosPartagees();
  }
}
