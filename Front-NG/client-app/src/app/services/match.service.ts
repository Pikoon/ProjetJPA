import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, of } from 'rxjs';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() {}

  getMatches(): Observable<Match[]> {
    // Simuler des données de matchs
    const matches: Match[] = [
      new Match(1, 'Tournoi de Football', 'Équipe A', 'Équipe B', 2, 1, new Date('2024-02-09'), true),
      new Match(2, 'Tournoi de Basketball', 'Équipe C', 'Équipe D', 80, 75, new Date('2024-02-08'), true),
      // Ajoutez d'autres matchs simulés ici
    ];

    return of(matches); // Retourne un Observable contenant les données simulées
  }
}