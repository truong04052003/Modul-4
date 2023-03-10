import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LInputComponent } from './l-input.component';

describe('LInputComponent', () => {
  let component: LInputComponent;
  let fixture: ComponentFixture<LInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
