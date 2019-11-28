import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRegistradoresAdminComponent } from './info-registradores-admin.component';

describe('InfoRegistradoresAdminComponent', () => {
  let component: InfoRegistradoresAdminComponent;
  let fixture: ComponentFixture<InfoRegistradoresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRegistradoresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRegistradoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
