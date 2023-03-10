import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UTemplateDrivenComponent } from './u-template-driven.component';

describe('UTemplateDrivenComponent', () => {
  let component: UTemplateDrivenComponent;
  let fixture: ComponentFixture<UTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
