import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradorTablaComponent } from './registrador-tabla.component';

describe('RegistradorTablaComponent', () => {
  let component: RegistradorTablaComponent;
  let fixture: ComponentFixture<RegistradorTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistradorTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistradorTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
