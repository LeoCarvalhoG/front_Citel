import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoImcMedioComponent } from './grafico-imc-medio.component';

describe('GraficoImcMedioComponent', () => {
  let component: GraficoImcMedioComponent;
  let fixture: ComponentFixture<GraficoImcMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoImcMedioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoImcMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
