import { Routes } from '@angular/router';
import { ListePhotosPartageesComponent } from './liste-photos-partagees/liste-photos-partagees.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PhotoPartageeSeuleComponent } from './photo-partagee-seule/photo-partagee-seule.component';

export const routes: Routes = [
  { path: 'photospartagees/:id', component: PhotoPartageeSeuleComponent },
  { path: '', component: PageAccueilComponent },
  { path: 'photospartagees', component: ListePhotosPartageesComponent },
];
