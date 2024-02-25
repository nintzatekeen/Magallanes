import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IonToggle, IonButtons, IonModal, IonAlert, IonToast, IonProgressBar, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol, IonList, IonItem, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCheckbox } from '@ionic/angular/standalone';
import { BuscadorComponent } from '../components/buscador/buscador.component';
import { Anime } from '../model/anime';
import { AnimeComponent } from '../anime/anime.component';
import { CommonModule } from '@angular/common';
//import { from } from 'rxjs';
import { AnimeServiceService } from '../service/anime-service.service';
import { RelationEntry } from '../model/relation_entry';
import { Relation } from '../model/relation';
import { FormsModule } from '@angular/forms';
import { Browser } from '@capacitor/browser';
import { TarjetaOpcionesComponent } from '../tarjeta-opciones/tarjeta-opciones.component';
import { ControladorBusqueda } from '../model/controlador_busqueda';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [TarjetaOpcionesComponent, IonToggle, IonButtons, IonModal, IonAlert, IonToast, IonProgressBar, IonHeader, IonToolbar, IonTitle, IonContent, BuscadorComponent, AnimeComponent, IonGrid, IonRow, IonCol, IonList, IonItem, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCheckbox, CommonModule, FormsModule],
})
export class HomePage {

  animes: Anime[] = [];
  
  @ViewChild('filtroBusqueda') filtroBusqueda!: TarjetaOpcionesComponent;
  @ViewChild('filtroVisibilidad') filtroVisibilidad!: TarjetaOpcionesComponent;

  @ViewChild('checkResumenes') checkResumenes!: IonCheckbox;
  @ViewChild('checkOtros') checkOtros!: IonCheckbox;
  @ViewChild('checkCharacter') checkCharacter!: IonCheckbox;
  @ViewChild('toastAviso') toastAviso!: IonToast;
  @ViewChild('alerta') alerta!: IonAlert;
  

  barraProgreso = false;
  isToastOpen = false;
  isAlertOpen = false;
  isModalOpen = false;
  urlParaAbrir: string | undefined;

  tipos: Map<string, boolean>;

  
  public get clavesDeTipos() : string[] {
    return [...this.tipos.keys()]?.sort();
  }

  
  public get animesVisibles() : Anime[] {
    return this.animes?.filter(a => this.tipos.has(a.type) ? this.tipos.get(a.type) : true)
  }
  
  
  public get isDarkTheme() : boolean {
    return document.body.classList.contains('dark');
  }
  

  themeToggle = false;

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
  

  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Sí',
      role: 'confirm',
      handler: async () => {
        if (this.urlParaAbrir) {
          await Browser.open({ url: this.urlParaAbrir! });
          this.urlParaAbrir = undefined;
        } else {
          this.limpiarTodo();
        }
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  setAlertOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  public get filtros() : string[] {
    let ret: string[] = [];
    if (this.summary) {
      ret.push('Summary');
    }
    if (this.other) {
      ret.push('Other');
    }
    if (this.character) {
      ret.push('Character');
    }

    return ret;
  }
  
  summary: boolean = false;
  other: boolean = false;
  character: boolean = false;
  controladorBusqueda: ControladorBusqueda;

  constructor(private animeService: AnimeServiceService) {
    this.tipos = new Map();
    this.controladorBusqueda = new ControladorBusqueda();
    this.controladorBusqueda.alAnadir = (a) => {
      if (a?.type) {
        if (this.tipos.has(a.type)) {
          this.tipos.set(a.type, this.tipos.get(a.type) === true)
        } else {
          this.tipos.set(a.type, true)
        }
      }
    };
  }

  ver(anime: Anime) {

    let entry: RelationEntry = {
      mal_id: anime.id,
      url: anime.url,
      type: '',
      name: ''
    }

    this.animes = [];
    this.animeService.obtenidos.clear();
    this.animeService.obtenidos.set(entry.mal_id, entry);
    this.barraProgreso = true;
    this.controladorBusqueda.cancelar = false;
    this.tipos.clear();
    this.animeService
    .sagase(entry, this.filtros, this.animes, this.controladorBusqueda)
    .then(() => {
      this.barraProgreso = false;
      this.isToastOpen = true;
      this.toastAviso.message = 'Se han encontrado ' + this.animes.length + ' resultados';
    }).catch((error) => {
      console.error(error);
      this.barraProgreso = false;
      this.isToastOpen = true;
      this.toastAviso.message = error ?? 'Ha ocurrido un error; inténtelo de nuevo más adelante.';
    });
  }

  mostrarFiltro() {
    this.filtroBusqueda.filtroVisible = true;
  }

  abrirAjustes() {
    this.setModalOpen(true);
  }

  mostrarVisibilidad() {
    this.filtroVisibilidad.filtroVisible = true;
  }

  async abrirNavegador(url: string) {
    this.urlParaAbrir = url;
    this.cambiarMensajeAlerta("Abrir enlace", "Se va a abrir un enlace externo; ¿desea continuar?");
    this.isAlertOpen = true;
  }

  getCapitulosTotales() {
    if (this.animesVisibles) {
      return this.animesVisibles.map(a => a.episodes).reduce((a, b) => a + b, 0);
    }
    return 0;
  }

  cancelarBusqueda() {
    this.controladorBusqueda.cancelar = true;
  }

  limpiarTodo() {
    this.animes = [];
  }

  solicitarLimpiar() {
    this.cambiarMensajeAlerta("Limpiar búsqueda", "¿Desea eliminar los resultados de su búsqueda?");
    this.isAlertOpen = true;
  }

  cambiarVisualizacion(tipo: string) {
    this.tipos.set(tipo, !this.tipos.get(tipo));
    console.log(this.tipos);
  }

  cambiarMensajeAlerta(titulo: string, mensaje: string) {
    this.alerta.header = titulo;
    this.alerta.message = mensaje;
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
