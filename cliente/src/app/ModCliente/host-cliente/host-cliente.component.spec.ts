import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostClienteComponent } from './host-cliente.component';

describe('HostClienteComponent', () => {
  let component: HostClienteComponent;
  let fixture: ComponentFixture<HostClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
