import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameradialogComponent } from './cameradialog.component';

describe('CameradialogComponent', () => {
  let component: CameradialogComponent;
  let fixture: ComponentFixture<CameradialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameradialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameradialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
