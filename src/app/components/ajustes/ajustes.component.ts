import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, IonSelectOption, IonAlert, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonToggle } from '@ionic/angular/standalone';
import { UtilBD } from 'src/app/utils/util_bd';
import { CommonModule } from '@angular/common';

import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
  imports: [CommonModule, TranslateModule, IonSelect, IonSelectOption, IonAlert, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonToggle],
})
export class AjustesComponent  implements OnInit {

  idiomas = [
    {codigo: 'es', nombre: 'Español'},
    {codigo: 'gl', nombre: 'Galego'},
  ];

  constructor(private translate: TranslateService) { }

  @ViewChild('botonAuto') botonAuto!: IonButton;
  @ViewChild('toggleModo') toggleModo!: IonToggle;
  @ViewChild('alerta') alerta!: IonAlert;

  themeToggle = false;
  abrirModal = false;

  isAlertOpen = false;

  setAlertOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }


  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Sí',
      role: 'confirm',
      handler: () => {
        UtilBD.borrarCache(() => {});
      },
    },
  ];

  public get isDarkTheme() : boolean {
    return document.body.classList.contains('dark');
  }

  setModalOpen(isOpen: boolean) {
    this.abrirModal = isOpen;
  }

  ngOnInit() {
    this.initializeDarkTheme(this.esModoOscuro);
  }

  fillBotonAuto(): string {
    return (window.localStorage.getItem('modo') != null) ? "outline" : "solid";
  }

  toggleDisabled(): boolean {
    return !(window.localStorage.getItem('modo') != null);
  }

  initializeDarkTheme(isDark: boolean) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }
  
  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  abrir() {
    this.abrirModal = true;
  }

  guardarPreferenciaModo(modo: boolean) {
    window.localStorage.setItem('modo', modo ? "true" : "false");
  }

  borrarPreferenciaModo() {
    window.localStorage.removeItem('modo');
  }
  cambiarAuto() {
    if (window.localStorage.getItem('modo') != null) {
      this.borrarPreferenciaModo();
      this.botonAuto.fill = "solid";
      this.toggleModo.disabled = true;
      this.toggleDarkTheme(this.esModoOscuro);
    } else {
      this.guardarPreferenciaModo(this.esModoOscuro);
      this.botonAuto.fill = "outline";
      this.toggleModo.disabled = false;
    }
  }

  public get esModoOscuro(): boolean {
    if (window.localStorage.getItem('modo') == null) {//AUTO
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {//MANUAL
      return window.localStorage.getItem('modo') == "true";
    }
  }

  alternarModo(ev: any) {
    let oscuro = ev.detail.checked;
    window.localStorage.setItem('modo', oscuro ? "true" : "false"); 
    this.toggleDarkTheme(oscuro);
  }

  obtenerEstimacionDeCache(callback : (tamano: string) => void) {
    navigator.storage.estimate().then(estimacion => {
      let uso = estimacion.usage ?? 0;
      let cadena = "0 B";

      if (uso < 1000) {
        cadena = ``;
      } else if (uso >= 1000 && uso < 1000000) {
        let dec = uso / 1000;
        let formateado = (Math.round(dec * 100) / 100).toFixed(2);
        cadena = `${formateado} KB`;
      } else {
        let dec = uso / 1000000;
        let formateado = (Math.round(dec * 100) / 100).toFixed(2);
        cadena = `${formateado} MB`;
      }
      callback(cadena);
    });
  }

  cambiarMensajeAlerta(titulo: string, mensaje: string) {
    this.alerta.header = titulo;
    this.alerta.message = mensaje;
  }

  borrarCache() {
    this.obtenerEstimacionDeCache((tamano) => {
      this.cambiarMensajeAlerta(this.translate.instant("borrar_cache"), this.translate.instant("confirmacion_borrar_cache", {value: tamano ? ` (${tamano})` : ''}));
      this.setAlertOpen(true);
    });
  }

  cambiarIdioma(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  get idiomaActual(): string {
    return localStorage.getItem("lang") ?? this.translate.getBrowserLang() ?? 'es'
  }
}
