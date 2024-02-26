import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonToggle } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
  imports: [IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonToggle],
})
export class AjustesComponent  implements OnInit {

  constructor() { }

  @ViewChild('botonAuto') botonAuto!: IonButton;
  @ViewChild('toggleModo') toggleModo!: IonToggle;

  themeToggle = false;
  abrirModal = false;

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
}
