import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { IonItem, IonGrid, IonAvatar, IonContent, IonRow, IonCol, IonBadge } from '@ionic/angular/standalone';
import { Anime } from '../model/anime';

@Component({
  standalone: true,
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  imports: [IonItem, IonGrid, IonAvatar, IonContent, IonRow, IonCol, IonBadge, DatePipe]
})
export class AnimeComponent  implements OnInit {
  @Input() anime: Anime | undefined;
  @Input() indice: number | undefined;
  


  constructor() { 
  }

  ngOnInit() {}

}
