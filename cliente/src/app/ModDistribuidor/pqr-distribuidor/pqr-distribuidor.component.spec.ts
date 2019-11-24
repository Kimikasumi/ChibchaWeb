import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrDistribuidorComponent } from './pqr-distribuidor.component';

describe('PqrDistribuidorComponent', () => {
  let component: PqrDistribuidorComponent;
  let fixture: ComponentFixture<PqrDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqrDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
