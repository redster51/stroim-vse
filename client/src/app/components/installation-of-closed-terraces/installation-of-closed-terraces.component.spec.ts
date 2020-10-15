import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationOfClosedTerracesComponent } from './installation-of-closed-terraces.component';

describe('InstallationOfClosedTerracesComponent', () => {
  let component: InstallationOfClosedTerracesComponent;
  let fixture: ComponentFixture<InstallationOfClosedTerracesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationOfClosedTerracesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationOfClosedTerracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
