import { Component, OnInit } from '@angular/core';
import { IonSearchbar, IonContent, IonInfiniteScroll, IonList, IonAvatar, IonLabel, IonItem, IonInfiniteScrollContent} from '@ionic/angular/standalone';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-buscador',
  standalone: true,
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
  imports: [IonSearchbar, IonContent, IonInfiniteScroll, IonList, IonAvatar, IonLabel, IonItem, IonInfiniteScrollContent, CommonModule]
})
export class BuscadorComponent  implements OnInit {

  constructor() { }

  items:String[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
