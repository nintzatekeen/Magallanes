import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { IonItem, IonGrid, IonAvatar, IonContent, IonRow, IonCol, IonBadge } from '@ionic/angular/standalone';
import { Anime } from '../../model/anime';

import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  imports: [TranslateModule, IonItem, IonGrid, IonAvatar, IonContent, IonRow, IonCol, IonBadge, DatePipe]
})
export class AnimeComponent  implements OnInit {
  @Input() anime: Anime | undefined;
  @Input() indice: number | undefined;

  @Output() alClicar = new EventEmitter();
  


  constructor(private translate: TranslateService) { 
  }

  ngOnInit() {}

  openCapacitorSite = (url: string | undefined) => {
    if (url) {
      this.alClicar.emit(url);
    }
  };

}
