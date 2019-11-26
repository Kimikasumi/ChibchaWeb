import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCpaqueteComponent } from './solicitud-cpaquete.component';

describe('SolicitudCpaqueteComponent', () => {
  let component: SolicitudCpaqueteComponent;
  let fixture: ComponentFixture<SolicitudCpaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudCpaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCpaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
