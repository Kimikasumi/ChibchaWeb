import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradorAdminComponent } from './registrador-admin.component';

describe('RegistradorAdminComponent', () => {
  let component: RegistradorAdminComponent;
  let fixture: ComponentFixture<RegistradorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistradorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistradorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
