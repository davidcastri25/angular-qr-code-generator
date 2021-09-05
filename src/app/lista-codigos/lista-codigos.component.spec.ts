import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCodigosComponent } from './lista-codigos.component';

describe('ListaCodigosComponent', () => {
  let component: ListaCodigosComponent;
  let fixture: ComponentFixture<ListaCodigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCodigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
