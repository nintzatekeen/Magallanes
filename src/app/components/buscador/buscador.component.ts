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

  ngOnInit() {

    this.generateItems();
  }

  private generateItems() {

    this.animeService.buscarAnime({q: "one", limit: 50, page: this.pagina++}).subscribe((data: any) => {
      data.data.forEach((o: any) => {
        let anime: Anime = {id: o.id, title: o.title, image: o.images.jpg.image_url}
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

}
