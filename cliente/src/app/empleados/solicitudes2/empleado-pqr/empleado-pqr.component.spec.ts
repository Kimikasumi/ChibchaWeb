import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoPqrComponent } from './empleado-pqr.component';

describe('EmpleadoPqrComponent', () => {
  let component: EmpleadoPqrComponent;
  let fixture: ComponentFixture<EmpleadoPqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoPqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoPqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
