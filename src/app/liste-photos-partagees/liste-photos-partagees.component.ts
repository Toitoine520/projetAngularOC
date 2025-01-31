import { Component, OnInit } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';
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
  private destroy$!: Subject<boolean>;

  constructor(private photosPartageesService: PhotosPartageesService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.photosPartagees = this.photosPartageesService.getPhotosPartagees();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
