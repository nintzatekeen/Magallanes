import { Component, OnInit } from '@angular/core';
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

  themeToggle = false;
  abrirModal = false;

  public get isDarkTheme() : boolean {
    return document.body.classList.contains('dark');
  }

  setModalOpen(isOpen: boolean) {
    this.abrirModal = isOpen;
  }

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

  // Check/uncheck the toggle and update the theme based on isDark
  initializeDarkTheme(isDark: boolean) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

    // Listen for the toggle check/uncheck to toggle the dark theme
    toggleChange(ev: any) {
      this.toggleDarkTheme(ev.detail.checked);
    }
  
    // Add or remove the "dark" class on the document body
    toggleDarkTheme(shouldAdd: boolean) {
      document.body.classList.toggle('dark', shouldAdd);
    }

    abrir() {
      this.abrirModal = true;
    }
}
