import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  langs: string[] = ['es', 'gl'];
  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.langs);
    const lang: string = localStorage.getItem("lang") ?? this.translate.getBrowserLang() ?? 'es';
    if (!this.langs.includes(lang)) {
      this.translate.setDefaultLang('es');
    } else {
      this.translate.use(lang);
    }
  }
}
