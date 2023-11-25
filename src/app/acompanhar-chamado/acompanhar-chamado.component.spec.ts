import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanharChamadoComponent } from './acompanhar-chamado.component';

describe('AcompanharChamadoComponent', () => {
  let component: AcompanharChamadoComponent;
  let fixture: ComponentFixture<AcompanharChamadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompanharChamadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanharChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
