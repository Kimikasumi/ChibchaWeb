import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoNHostComponent } from './empleado-n-host.component';

describe('EmpleadoNHostComponent', () => {
  let component: EmpleadoNHostComponent;
  let fixture: ComponentFixture<EmpleadoNHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoNHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoNHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
