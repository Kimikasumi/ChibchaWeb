import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrClienteComponent } from './pqr-cliente.component';

describe('PqrClienteComponent', () => {
  let component: PqrClienteComponent;
  let fixture: ComponentFixture<PqrClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqrClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
