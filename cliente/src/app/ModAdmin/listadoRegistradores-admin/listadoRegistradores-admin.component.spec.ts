import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRegistradoresAdminComponent } from './listadoRegistradores-admin.component';

describe('ListadoRegistradoresAdminComponent', () => {
  let component: ListadoRegistradoresAdminComponent;
  let fixture: ComponentFixture<ListadoRegistradoresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRegistradoresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRegistradoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
