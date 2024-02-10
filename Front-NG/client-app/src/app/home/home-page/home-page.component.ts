import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { Match } from '../../models/match.model';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    MatTabsModule,
    MatDividerModule,
    CommonModule
  ],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent implements OnInit {


  /*
   * Properties
   */ 
  allMatches: Match[] = [];


  /*
   * Constructor
   */ 
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {

    // Appel de la méthode getMatches() du service MatchService
    this.matchService.getMatches().subscribe(
      (matches: Match[]) => {
        // Remplacer les matchs existants par les nouveaux matchs émis par l'observable
        this.allMatches = matches;
      },
      (error) => {
        console.error('WebSocket error:', error);
      }
    );
  }
}