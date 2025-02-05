import { Routes } from '@angular/router';
import { ListePhotosPartageesComponent } from './liste-photos-partagees/liste-photos-partagees.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PhotoPartageeSeuleComponent } from './photo-partagee-seule/photo-partagee-seule.component';
import { NouvellePhotoPartageeComponent } from './nouvelle-photo-partagee/nouvelle-photo-partagee.component';

export const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'creer-pp', component: NouvellePhotoPartageeComponent },
  { path: 'photospartagees', component: ListePhotosPartageesComponent },
  { path: 'photospartagees/:id', component: PhotoPartageeSeuleComponent },

];
