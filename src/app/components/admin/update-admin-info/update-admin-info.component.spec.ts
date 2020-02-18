import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminInfoComponent } from './update-admin-info.component';

describe('UpdateAdminInfoComponent', () => {
  let component: UpdateAdminInfoComponent;
  let fixture: ComponentFixture<UpdateAdminInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAdminInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdminInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
