import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradorSolicitudComponent } from './registrador-solicitud.component';

describe('RegistradorSolicitudComponent', () => {
  let component: RegistradorSolicitudComponent;
  let fixture: ComponentFixture<RegistradorSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistradorSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistradorSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
