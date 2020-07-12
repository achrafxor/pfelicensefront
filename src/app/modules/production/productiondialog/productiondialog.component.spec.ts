import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiondialogComponent } from './productiondialog.component';

describe('ProductiondialogComponent', () => {
  let component: ProductiondialogComponent;
  let fixture: ComponentFixture<ProductiondialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiondialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
