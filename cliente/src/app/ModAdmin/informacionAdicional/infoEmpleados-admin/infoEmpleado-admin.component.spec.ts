import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEmpleadoAdminComponent } from './infoEmpleado-admin.component';

describe('InfoEmpleadoAdminComponent', () => {
  let component: InfoEmpleadoAdminComponent;
  let fixture: ComponentFixture<InfoEmpleadoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEmpleadoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEmpleadoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
