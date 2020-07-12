import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideabarComponent } from './sideabar.component';

describe('SideabarComponent', () => {
  let component: SideabarComponent;
  let fixture: ComponentFixture<SideabarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideabarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
