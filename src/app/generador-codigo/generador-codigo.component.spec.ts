import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorCodigoComponent } from './generador-codigo.component';

describe('GeneradorCodigoComponent', () => {
  let component: GeneradorCodigoComponent;
  let fixture: ComponentFixture<GeneradorCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorCodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
