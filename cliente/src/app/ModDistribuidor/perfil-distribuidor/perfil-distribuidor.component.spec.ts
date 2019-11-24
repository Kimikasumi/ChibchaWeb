import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDistribuidorComponent } from './perfil-distribuidor.component';

describe('PerfilDistribuidorComponent', () => {
  let component: PerfilDistribuidorComponent;
  let fixture: ComponentFixture<PerfilDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
