import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailInboxComponent } from './gmail-inbox.component';

describe('GmailInboxComponent', () => {
  let component: GmailInboxComponent;
  let fixture: ComponentFixture<GmailInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
