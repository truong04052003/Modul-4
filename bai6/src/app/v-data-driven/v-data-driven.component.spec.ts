import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDataDrivenComponent } from './v-data-driven.component';

describe('VDataDrivenComponent', () => {
  let component: VDataDrivenComponent;
  let fixture: ComponentFixture<VDataDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VDataDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
