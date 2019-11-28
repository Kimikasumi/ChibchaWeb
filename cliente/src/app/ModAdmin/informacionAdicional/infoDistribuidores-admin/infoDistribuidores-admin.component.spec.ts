import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDistribuidoresAdminComponent } from './infoDistribuidores-admin.component';

describe('InfoDistribuidoresAdminComponent', () => {
  let component: InfoDistribuidoresAdminComponent;
  let fixture: ComponentFixture<InfoDistribuidoresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDistribuidoresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDistribuidoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
