import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarClienteComponent } from './sidebar-cliente.component';

describe('SidebarClienteComponent', () => {
  let component: SidebarClienteComponent;
  let fixture: ComponentFixture<SidebarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
