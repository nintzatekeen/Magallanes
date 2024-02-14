import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol, IonList, IonItem, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCheckbox } from '@ionic/angular/standalone';
import { BuscadorComponent } from '../components/buscador/buscador.component';
import { Anime } from '../model/anime';
import { AnimeComponent } from '../anime/anime.component';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { AnimeServiceService } from '../service/anime-service.service';
import { RelationEntry } from '../model/relation_entry';
import { Relation } from '../model/relation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, BuscadorComponent, AnimeComponent, IonGrid, IonRow, IonCol, IonList, IonItem, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCheckbox, CommonModule, FormsModule],
})
export class HomePage {

  animes: Anime[] = [];
  filtroVisible = false;
  @ViewChild('tarjetaOpciones', { read: ElementRef }) tarjetaOpciones!: ElementRef;
  @ViewChild('botonFiltro', { static: true }) botonFiltro!: any;

  @ViewChild('checkResumenes') checkResumenes!: IonCheckbox;
  @ViewChild('checkOtros') checkOtros!: IonCheckbox;
  @ViewChild('checkCharacter') checkCharacter!: IonCheckbox;

  
  public get filtros() : string[] {
    let ret: string[] = [];
    if (this.summary) {
      ret.push('Summary');
    }
    if (this.other) {
      ret.push('Other');
    }
    if (this.character) {
      ret.push('Character');
    }

    return ret;
  }
  
  summary: boolean = false;
  other: boolean = false;
  character: boolean = false;

  constructor(private animeService: AnimeServiceService) {
  }

  ver(anime: Anime) {

    let entry: RelationEntry = {
      mal_id: anime.id,
      url: anime.url,
      type: '',
      name: ''
    }

    let rel: Relation = {
      relation: '',
      entry: [entry]
    }

    this.animes = [];
    this.animeService.obtenidos.clear();
    this.animeService.obtenidos.set(entry.mal_id, entry);
    this.animeService.sagase(entry, this.filtros, this.animes);
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
