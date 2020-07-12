import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueaddComponent } from './dialogueadd.component';

describe('DialogueaddComponent', () => {
  let component: DialogueaddComponent;
  let fixture: ComponentFixture<DialogueaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
