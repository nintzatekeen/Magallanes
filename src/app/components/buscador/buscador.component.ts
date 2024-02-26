import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IonSearchbar, IonContent, IonInfiniteScroll, IonList, IonAvatar, IonLabel, IonItem, IonInfiniteScrollContent, IonButton, IonIcon, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AnimeServiceService } from 'src/app/service/anime-service.service';
import { Anime } from 'src/app/model/anime';
@Component({
  selector: 'app-buscador',
  standalone: true,
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
  imports: [IonSearchbar, IonContent, IonInfiniteScroll, IonList, IonAvatar, IonLabel, IonItem, IonInfiniteScrollContent, IonButton, IonIcon, IonGrid, IonRow, IonCol, CommonModule]
})
export class BuscadorComponent  implements OnInit {

  constructor(private animeService: AnimeServiceService) { }
  
  @Output() alSeleccionar = new EventEmitter();
  @Output() alAbrirFiltro = new EventEmitter();
  @Output() alAbrirAjustes = new EventEmitter();

  @ViewChild('barraBusqueda', { static: false }) barraBusqueda!: IonSearchbar;

  items:Anime[] = [];
  pagina: number = 1;
  busqueda: string = '';
  timeoutInput: any = null;
  seleccionado: Anime | null = null;

  ngOnInit() {

  }

  private generateItems() {

    this.animeService.buscarAnime({q: this.busqueda, limit: 25, page: this.pagina++}).subscribe((data: any) => {
      data.data.forEach((a: any) => {
        let anime: Anime = this.animeService.mapearAnime(a);
        this.items.push(anime);
      });
    });
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 1000);
  }

  buscar(event: any) {
    this.pagina = 1;
    this.busqueda = event?.detail?.value;
    if (this.timeoutInput) {
      clearTimeout(this.timeoutInput);
    }
    this.timeoutInput = setTimeout(() => {
      this.items = [];
      if (this.busqueda) {
        this.generateItems();
      }
    }, 333);
  }

  seleccionarAnime(ani: any) {
    this.limpiar();
    let id: number = ani.id;
    if (id) {
      this.animeService.obtenerAnimeCompleto(id).subscribe((data: any) => {
        let raw: any = data?.data;
        if (raw) {
          this.seleccionado = this.animeService.mapearAnime(raw);
          this.alSeleccionar.emit(this.seleccionado);
        }
      });
    }
  }

  mostrarFiltro() {
    this.alAbrirFiltro.emit();
  }

  mostrarAjustes() {
    this.alAbrirAjustes.emit();
  }

  limpiar() {
    this.barraBusqueda.value = "";
    this.busqueda = '';
    this.items = [];
    this.pagina = 1;
    this.timeoutInput = null;
  }

}
