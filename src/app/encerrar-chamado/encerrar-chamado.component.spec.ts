import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerrarChamadoComponent } from './encerrar-chamado.component';

describe('EncerrarChamadoComponent', () => {
  let component: EncerrarChamadoComponent;
  let fixture: ComponentFixture<EncerrarChamadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncerrarChamadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncerrarChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
