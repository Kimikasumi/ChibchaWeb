import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDistribuidorComponent } from './host-distribuidor.component';

describe('HostDistribuidorComponent', () => {
  let component: HostDistribuidorComponent;
  let fixture: ComponentFixture<HostDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
