import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradorSideComponent } from './registrador-side.component';

describe('RegistradorSideComponent', () => {
  let component: RegistradorSideComponent;
  let fixture: ComponentFixture<RegistradorSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistradorSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistradorSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
