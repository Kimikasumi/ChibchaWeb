import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCplanComponent } from './solicitud-cplan.component';

describe('SolicitudCplanComponent', () => {
  let component: SolicitudCplanComponent;
  let fixture: ComponentFixture<SolicitudCplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudCplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
