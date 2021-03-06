import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBienComponent } from './add-bien.component';

describe('AddBienComponent', () => {
  let component: AddBienComponent;
  let fixture: ComponentFixture<AddBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
