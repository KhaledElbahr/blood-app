import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBloodProductComponent } from './list-blood-product.component';

describe('ListBloodProductComponent', () => {
  let component: ListBloodProductComponent;
  let fixture: ComponentFixture<ListBloodProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBloodProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBloodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
