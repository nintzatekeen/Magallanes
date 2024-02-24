import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';



@Component({
  standalone: true,
  selector: 'app-tarjeta-opciones',
  templateUrl: './tarjeta-opciones.component.html',
  styleUrls: ['./tarjeta-opciones.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, CommonModule]
})
export class TarjetaOpcionesComponent  implements OnInit {
  
  @ViewChild('tarjetaOpciones', { read: ElementRef }) tarjetaOpciones!: ElementRef;
  @Input() filtroVisible:boolean = false;
  @Input() titulo!:string;
  @Input() subtitulo!:string;

  constructor() { }

  ngOnInit() {}

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (this.filtroVisible) {
      if (!this.tarjetaOpciones.nativeElement.contains(event.target)) {
        this.filtroVisible = false;
      }
    }
  }

}
