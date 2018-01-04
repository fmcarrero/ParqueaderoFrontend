import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidavehiculosComponent } from './salidavehiculos.component';

describe('SalidavehiculosComponent', () => {
  let component: SalidavehiculosComponent;
  let fixture: ComponentFixture<SalidavehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidavehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidavehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
