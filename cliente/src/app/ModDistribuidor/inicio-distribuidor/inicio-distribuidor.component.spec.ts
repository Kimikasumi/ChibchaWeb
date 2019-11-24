import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDistribuidorComponent } from './inicio-distribuidor.component';

describe('InicioDistribuidorComponent', () => {
  let component: InicioDistribuidorComponent;
  let fixture: ComponentFixture<InicioDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
