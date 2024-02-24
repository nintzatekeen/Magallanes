import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarjetaOpcionesComponent } from './tarjeta-opciones.component';

describe('TarjetaOpcionesComponent', () => {
  let component: TarjetaOpcionesComponent;
  let fixture: ComponentFixture<TarjetaOpcionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaOpcionesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
