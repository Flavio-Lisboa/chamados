import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaChamadosComponent } from './tabela-chamados.component';

describe('TabelaChamadosComponent', () => {
  let component: TabelaChamadosComponent;
  let fixture: ComponentFixture<TabelaChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaChamadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
