import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueupdateComponent } from './dialogueupdate.component';

describe('DialogueupdateComponent', () => {
  let component: DialogueupdateComponent;
  let fixture: ComponentFixture<DialogueupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
