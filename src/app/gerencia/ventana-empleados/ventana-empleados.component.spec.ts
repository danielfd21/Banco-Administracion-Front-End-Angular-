import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaEmpleadosComponent } from './ventana-empleados.component';

describe('VentanaEmpleadosComponent', () => {
  let component: VentanaEmpleadosComponent;
  let fixture: ComponentFixture<VentanaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
