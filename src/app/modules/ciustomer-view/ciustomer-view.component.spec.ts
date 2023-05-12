import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiustomerViewComponent } from './ciustomer-view.component';

describe('CiustomerViewComponent', () => {
  let component: CiustomerViewComponent;
  let fixture: ComponentFixture<CiustomerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiustomerViewComponent]
    });
    fixture = TestBed.createComponent(CiustomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
