import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderdialogComponent } from './shareholderdialog.component';

describe('ShareholderdialogComponent', () => {
  let component: ShareholderdialogComponent;
  let fixture: ComponentFixture<ShareholderdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareholderdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
