import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEmpleadosAdminComponent } from './listadoEmpleados-admin.component';

describe('ListadoEmpleadosAdminComponent', () => {
  let component: ListadoEmpleadosAdminComponent;
  let fixture: ComponentFixture<ListadoEmpleadosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEmpleadosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEmpleadosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
