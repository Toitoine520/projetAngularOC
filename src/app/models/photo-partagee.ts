/**
 * Objet représentant une photo partagée sur le site
 * lieu => propriété optionnelle ; détermine le lieu de la photo
 * id => identifiant unique
 *
 * title => titre de la photo
 * description => description de la photo
 * dateCreation => date de publication de la photo
 * nbreReactions => nombre de réactions à la photo
 * urlImage => adresse de l'image publiée
 */

import { TypePhoto } from './type-photo.type';

export class PhotoPartagee {
  lieu?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public dateCreation: Date,
    public nbreReactions: number,
    public urlImage: string
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }
  /**
   * fonction permettant d'ajouter un lieu à la photo
   * @param lieu string pour déterminer le lieu de la photo
   */
  setLieu(lieu: string): void {
    this.lieu = lieu;
  }

  /** Va retourner le lieu modifié
   *
   * @param lieu string
   * @returns retourne la photo partagée avec le lieu ajouté
   */
  avecCommeLieu(lieu: string): PhotoPartagee {
    this.setLieu(lieu);
    return this;
  }

  reagir(typePhoto: TypePhoto) {
    if (typePhoto === 'Réagie') {
      this.ajouterReaction();
    } else if (typePhoto === 'Non réagie') {
      this.retirerReaction();
    }
  }
  /**
   * permet d'incrémenter le nombre de réaction de la photo
   */
  ajouterReaction() {
    this.nbreReactions++;
  }
  /**
   * permet de décrémenter le nombre de réaction de la photo
   */
  retirerReaction() {
    this.nbreReactions--;
  }
}
