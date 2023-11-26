import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAcompanharChamadosComponent } from './tabela-acompanhar-chamados.component';

describe('TabelaAcompanharChamadosComponent', () => {
  let component: TabelaAcompanharChamadosComponent;
  let fixture: ComponentFixture<TabelaAcompanharChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAcompanharChamadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAcompanharChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
