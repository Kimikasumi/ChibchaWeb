import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoClientesAdminComponent } from './listadoClientes-admin.component';

describe('ListadoClientesAdminComponent', () => {
  let component: ListadoClientesAdminComponent;
  let fixture: ComponentFixture<ListadoClientesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoClientesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoClientesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
