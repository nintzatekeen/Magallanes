import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IonAlert, IonToast, IonProgressBar, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol, IonList, IonItem, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCheckbox } from '@ionic/angular/standalone';
import { BuscadorComponent } from '../components/buscador/buscador.component';
import { Anime } from '../model/anime';
import { AnimeComponent } from '../anime/anime.component';
import { CommonModule } from '@angular/common';
//import { from } from 'rxjs';
import { AnimeServiceService } from '../service/anime-service.service';
import { RelationEntry } from '../model/relation_entry';
import { Relation } from '../model/relation';
import { FormsModule } from '@angular/forms';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonAlert, IonToast, IonProgressBar, IonHeader, IonToolbar, IonTitle, IonContent, BuscadorComponent, AnimeComponent, IonGrid, IonRow, IonCol, IonList, IonItem, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCheckbox, CommonModule, FormsModule],
})
export class HomePage {

  animes: Anime[] = [];
  filtroVisible = false;
  @ViewChild('tarjetaOpciones', { read: ElementRef }) tarjetaOpciones!: ElementRef;

  @ViewChild('checkResumenes') checkResumenes!: IonCheckbox;
  @ViewChild('checkOtros') checkOtros!: IonCheckbox;
  @ViewChild('checkCharacter') checkCharacter!: IonCheckbox;
  @ViewChild('toastAviso') toastAviso!: IonToast;

  barraProgreso = false;
  isToastOpen = false;
  isAlertOpen = false;
  urlParaAbrir: string | undefined;

  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Sí',
      role: 'confirm',
      handler: async () => {
        await Browser.open({ url: this.urlParaAbrir! });
        this.urlParaAbrir = undefined;
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  setAlertOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  
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

    this.animes = [];
    this.animeService.obtenidos.clear();
    this.animeService.obtenidos.set(entry.mal_id, entry);
    this.barraProgreso = true;
    this.animeService
    .sagase(entry, this.filtros, this.animes)
    .then(() => {
      this.barraProgreso = false;
      this.isToastOpen = true;
      this.toastAviso.message = 'Se han encontrado ' + this.animes.length + ' resultados';
    }).catch((error) => {
      console.error(error);
      this.barraProgreso = false;
      this.isToastOpen = true;
      this.toastAviso.message = 'Ha ocurrido un error; inténtelo de nuevo más adelante.';
    });
  }

  mostrarFiltro() {
    this.filtroVisible = !this.filtroVisible;
  }

  async abrirNavegador(url: string) {
    this.urlParaAbrir = url;
    this.isAlertOpen = true;
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (this.filtroVisible) {
      if (!this.tarjetaOpciones.nativeElement.contains(event.target)) {
        this.filtroVisible = false;
      }
    }
  }

}
