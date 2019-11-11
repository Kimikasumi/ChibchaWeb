import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInicioComponent } from './pag-inicio.component';

describe('PagInicioComponent', () => {
  let component: PagInicioComponent;
  let fixture: ComponentFixture<PagInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
