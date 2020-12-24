import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBienComponent } from './reservation-bien.component';

describe('ReservationBienComponent', () => {
  let component: ReservationBienComponent;
  let fixture: ComponentFixture<ReservationBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
