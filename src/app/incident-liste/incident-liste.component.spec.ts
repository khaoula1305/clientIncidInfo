import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListeComponent } from './incident-liste.component';

describe('IncidentListeComponent', () => {
  let component: IncidentListeComponent;
  let fixture: ComponentFixture<IncidentListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
