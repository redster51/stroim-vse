import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedServiceComponent } from './selected-service.component';

describe('SelectedServiceComponent', () => {
  let component: SelectedServiceComponent;
  let fixture: ComponentFixture<SelectedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
