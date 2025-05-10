import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMostrarClaveComponent } from './boton-mostrar-clave.component';

describe('BotonMostrarClaveComponent', () => {
  let component: BotonMostrarClaveComponent;
  let fixture: ComponentFixture<BotonMostrarClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonMostrarClaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonMostrarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
