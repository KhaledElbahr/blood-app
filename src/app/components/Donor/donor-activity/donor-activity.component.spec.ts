import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorActivityComponent } from './donor-activity.component';

describe('DonorActivityComponent', () => {
  let component: DonorActivityComponent;
  let fixture: ComponentFixture<DonorActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
