import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDistribuidoresAdminComponent } from './listadoDistribuidores-admin.component';

describe('ListadoDistribuidoresAdminComponent', () => {
  let component: ListadoDistribuidoresAdminComponent;
  let fixture: ComponentFixture<ListadoDistribuidoresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDistribuidoresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDistribuidoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
