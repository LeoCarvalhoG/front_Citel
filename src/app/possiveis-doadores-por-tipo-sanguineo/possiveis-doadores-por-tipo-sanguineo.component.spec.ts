import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossiveisDoadoresPorTipoSanguineoComponent } from './possiveis-doadores-por-tipo-sanguineo.component';

describe('PossiveisDoadoresPorTipoSanguineoComponent', () => {
  let component: PossiveisDoadoresPorTipoSanguineoComponent;
  let fixture: ComponentFixture<PossiveisDoadoresPorTipoSanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PossiveisDoadoresPorTipoSanguineoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PossiveisDoadoresPorTipoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
