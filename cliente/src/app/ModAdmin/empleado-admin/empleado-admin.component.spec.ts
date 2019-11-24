import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAdminComponent } from './empleado-admin.component';

describe('EmpleadoAdminComponent', () => {
  let component: EmpleadoAdminComponent;
  let fixture: ComponentFixture<EmpleadoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
