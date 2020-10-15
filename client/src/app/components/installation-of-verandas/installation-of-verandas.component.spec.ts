import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationOfVerandasComponent } from './installation-of-verandas.component';

describe('InstallationOfVerandasComponent', () => {
  let component: InstallationOfVerandasComponent;
  let fixture: ComponentFixture<InstallationOfVerandasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationOfVerandasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationOfVerandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
