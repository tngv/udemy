import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccordionComponent } from './app-accordion.component';

describe('AppAccordionComponent', () => {
  let component: AppAccordionComponent;
  let fixture: ComponentFixture<AppAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
