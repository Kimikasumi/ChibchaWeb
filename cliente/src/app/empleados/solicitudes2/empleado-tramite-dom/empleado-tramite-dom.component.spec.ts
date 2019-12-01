import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoTramiteDomComponent } from './empleado-tramite-dom.component';

describe('EmpleadoTramiteDomComponent', () => {
  let component: EmpleadoTramiteDomComponent;
  let fixture: ComponentFixture<EmpleadoTramiteDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoTramiteDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoTramiteDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
