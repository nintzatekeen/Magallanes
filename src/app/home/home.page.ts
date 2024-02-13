import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
// import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonList, IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';
import { BuscadorComponent } from '../components/buscador/buscador.component';
import { Anime } from '../model/anime';
import { AnimeComponent } from '../anime/anime.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  // imports: [IonHeader, IonToolbar, IonTitle, IonContent, BuscadorComponent, AnimeComponent, IonGrid, IonRow, IonCol, IonList, IonItem, IonButton, IonIcon, CommonModule],
  imports: [ IonicModule, CommonModule, BuscadorComponent, AnimeComponent]
})
export class HomePage {

  animes: Anime[] = [];

  constructor() {
  }

  ver(anime: Anime) {
    this.animes.push(anime)
    console.log(anime);
  }
}
