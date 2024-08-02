import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentualObesosPorGeneroComponent } from './percentual-obesos-por-genero.component';

describe('PercentualObesosPorGeneroComponent', () => {
  let component: PercentualObesosPorGeneroComponent;
  let fixture: ComponentFixture<PercentualObesosPorGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentualObesosPorGeneroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentualObesosPorGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
