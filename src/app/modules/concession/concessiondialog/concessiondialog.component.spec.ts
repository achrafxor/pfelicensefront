import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessiondialogComponent } from './concessiondialog.component';

describe('ConcessiondialogComponent', () => {
  let component: ConcessiondialogComponent;
  let fixture: ComponentFixture<ConcessiondialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcessiondialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
