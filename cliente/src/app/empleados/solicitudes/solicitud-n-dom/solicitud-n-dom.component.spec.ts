import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudNDomComponent } from './solicitud-n-dom.component';

describe('SolicitudNDomComponent', () => {
  let component: SolicitudNDomComponent;
  let fixture: ComponentFixture<SolicitudNDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudNDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudNDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
