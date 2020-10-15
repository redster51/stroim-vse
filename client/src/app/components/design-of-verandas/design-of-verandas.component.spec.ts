import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignOfVerandasComponent } from './design-of-verandas.component';

describe('DesignOfVerandasComponent', () => {
  let component: DesignOfVerandasComponent;
  let fixture: ComponentFixture<DesignOfVerandasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignOfVerandasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignOfVerandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
