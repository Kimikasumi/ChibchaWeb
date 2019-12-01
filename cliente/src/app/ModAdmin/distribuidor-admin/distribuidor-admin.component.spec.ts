import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidorAdminComponent } from './distribuidor-admin.component';

describe('DistribuidorAdminComponent', () => {
  let component: DistribuidorAdminComponent;
  let fixture: ComponentFixture<DistribuidorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuidorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuidorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
