import { Component, Input, OnInit } from '@angular/core';

import { IonItem, IonGrid, IonAvatar, IonContent, IonRow, IonCol, IonBadge } from '@ionic/angular/standalone';
import { Anime } from '../model/anime';

@Component({
  standalone: true,
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  imports: [IonItem, IonGrid, IonAvatar, IonContent, IonRow, IonCol, IonBadge]
})
export class AnimeComponent  implements OnInit {
  @Input() image: string | undefined;
  @Input() indice: number | undefined;
  


  constructor() { 
  }

  ngOnInit() {}

}
