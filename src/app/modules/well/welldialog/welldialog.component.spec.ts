import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelldialogComponent } from './welldialog.component';

describe('WelldialogComponent', () => {
  let component: WelldialogComponent;
  let fixture: ComponentFixture<WelldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
