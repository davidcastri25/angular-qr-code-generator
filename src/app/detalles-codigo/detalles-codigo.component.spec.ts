import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCodigoComponent } from './detalles-codigo.component';

describe('DetallesCodigoComponent', () => {
  let component: DetallesCodigoComponent;
  let fixture: ComponentFixture<DetallesCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
