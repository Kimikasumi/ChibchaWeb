import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoSideComponent } from './empleado-side.component';

describe('EmpleadoSideComponent', () => {
  let component: EmpleadoSideComponent;
  let fixture: ComponentFixture<EmpleadoSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
