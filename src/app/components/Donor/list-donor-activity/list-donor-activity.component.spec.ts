import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonorActivityComponent } from './list-donor-activity.component';

describe('ListDonorActivityComponent', () => {
  let component: ListDonorActivityComponent;
  let fixture: ComponentFixture<ListDonorActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDonorActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDonorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
