import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudChostComponent } from './solicitud-chost.component';

describe('SolicitudChostComponent', () => {
  let component: SolicitudChostComponent;
  let fixture: ComponentFixture<SolicitudChostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudChostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudChostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
