import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { IonButton } from '@ionic/angular/standalone';
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
  filtroVisible = false;
  @ViewChild('tarjetaOpciones', { read: ElementRef }) tarjetaOpciones!: ElementRef;
  @ViewChild('botonFiltro', { static: true }) botonFiltro!: any;

  constructor() {
  }

  ver(anime: Anime) {
    this.animes.push(anime)
    console.log(anime);
  }

  mostrarFiltro() {
    this.filtroVisible = !this.filtroVisible;
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (this.filtroVisible) {
      if (!this.tarjetaOpciones.nativeElement.contains(event.target) && this.botonFiltro?.el != event.target) {
        this.filtroVisible = false;
      }
    }
  }

}
