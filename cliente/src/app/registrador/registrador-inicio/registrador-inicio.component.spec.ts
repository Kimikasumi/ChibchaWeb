import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradorInicioComponent } from './registrador-inicio.component';

describe('RegistradorInicioComponent', () => {
  let component: RegistradorInicioComponent;
  let fixture: ComponentFixture<RegistradorInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistradorInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistradorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
