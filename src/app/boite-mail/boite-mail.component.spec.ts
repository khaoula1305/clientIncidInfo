import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteMailComponent } from './boite-mail.component';

describe('BoiteMailComponent', () => {
  let component: BoiteMailComponent;
  let fixture: ComponentFixture<BoiteMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
