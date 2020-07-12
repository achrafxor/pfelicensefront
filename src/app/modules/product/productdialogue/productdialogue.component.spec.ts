import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdialogueComponent } from './productdialogue.component';

describe('ProductdialogueComponent', () => {
  let component: ProductdialogueComponent;
  let fixture: ComponentFixture<ProductdialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
