import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { Match } from '../../models/match.model';

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

  allMatches : Match[] = [
    new Match(1, 'Tournoi de Football', 'Équipe A', 'Équipe B', 2, 1, new Date('2024-02-09'), true),
    new Match(2, 'Tournoi de Basketball', 'Équipe C', 'Équipe D', 80, 75, new Date('2024-02-08'), true),
    new Match(3, 'Tournoi de Volleyball', 'Équipe E', 'Équipe F', 3, 2, new Date('2024-02-07'), true),
    new Match(4, 'Tournoi de Tennis', 'Équipe G', 'Équipe H', 6, 4, new Date('2024-02-06'), true),
    new Match(5, 'Tournoi de Rugby', 'Équipe I', 'Équipe J', 15, 10, new Date('2024-02-05'), false),
  ];


  ngOnInit(): void {
  }


}
