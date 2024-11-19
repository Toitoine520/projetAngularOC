import { Injectable } from '@angular/core';
import { PhotoPartagee } from '../models/photo-partagee';
import { TypePhoto } from '../models/type-photo.type';

@Injectable({
  providedIn: 'root',
})
export class PhotosPartageesService {
  private photosPartagees: PhotoPartagee[] = [
    new PhotoPartagee(
      'soleil couchant',
      "Paysage d'un champ sous un coucher de soleil",
      new Date(),
      250,
      'https://res.cloudinary.com/land-trust-alliance/image/fetch/f_webp,q_auto,g_auto:subject,w_2000,h_2000,c_fill/https://a.storyblok.com/f/120093/3992x2992/cf24a3735f/dji_0025.jpg'
    ).avecCommeLieu('Montaigue'),
    new PhotoPartagee(
      'aquarium',
      "Des personnes en visites devant un bassin d'aquarium",
      new Date(),
      154,
      'https://img.batiweb.com/repo-images/article/43010/aquarium.jpg'
    ),
  ];

  /**
   * Récupère un tableau de photos
   * @returns PhotoPartagee[]
   */
  getPhotosPartagees(): PhotoPartagee[] {
    return [...this.photosPartagees];
  }
  /**
   * Permet de réagir à la photo par son id
   * @param idPhoto string
   * @param typePhoto TypePhoto
   */
  reagirALaPhotoParId(idPhoto: string, typePhoto: TypePhoto): void {
    const photo = this.getPhotoParId(idPhoto);
    photo.reagir(typePhoto);
  }

  /**
   * Récupère une photo par son id
   * @param idPhoto string
   * @returns PhotoPartagee
   */
  getPhotoParId(idPhoto: string): PhotoPartagee {
    const photoTrouvee = this.photosPartagees.find(
      (photoPartagee) => photoPartagee.id === idPhoto
    );
    if (!photoTrouvee) {
      throw new Error('Photo introuvable !');
    }

    return photoTrouvee;
  }
}
