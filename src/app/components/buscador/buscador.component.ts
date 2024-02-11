import { Component, OnInit } from '@angular/core';
import { IonSearchbar, IonContent, IonInfiniteScroll, IonList, IonAvatar, IonLabel, IonItem, IonInfiniteScrollContent} from '@ionic/angular/standalone';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AnimeServiceService } from 'src/app/service/anime-service.service';
import { Anime } from 'src/app/model/anime';
@Component({
  selector: 'app-buscador',
  standalone: true,
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
  imports: [IonSearchbar, IonContent, IonInfiniteScroll, IonList, IonAvatar, IonLabel, IonItem, IonInfiniteScrollContent, CommonModule]
})
export class BuscadorComponent  implements OnInit {

  constructor(private animeService: AnimeServiceService) { }

  items:Anime[] = [];
  pagina: number = 1;
  busqueda: string = '';
  timeoutInput: any = null;

  ngOnInit() {

  }

  private generateItems() {

    this.animeService.buscarAnime({q: this.busqueda, limit: 25, page: this.pagina++}).subscribe((data: any) => {
      console.log(data);
      data.data.forEach((a: any) => {
        let anime: Anime = this.animeService.mapearAnime(a);
        this.items.push(anime);
        console.log(anime);
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

  seleccionarAnime(event: any) {
    console.log(event);
  }

}
