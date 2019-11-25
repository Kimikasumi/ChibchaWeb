import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDistribuidorComponent } from './cliente-distribuidor.component';

describe('ClienteDistribuidorComponent', () => {
  let component: ClienteDistribuidorComponent;
  let fixture: ComponentFixture<ClienteDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
