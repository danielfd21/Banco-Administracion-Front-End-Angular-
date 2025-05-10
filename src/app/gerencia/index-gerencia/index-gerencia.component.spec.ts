import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGerenciaComponent } from './index-gerencia.component';

describe('IndexGerenciaComponent', () => {
  let component: IndexGerenciaComponent;
  let fixture: ComponentFixture<IndexGerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexGerenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
