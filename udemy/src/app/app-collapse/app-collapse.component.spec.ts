import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCollapseComponent } from './app-collapse.component';

describe('AppCollapseComponent', () => {
  let component: AppCollapseComponent;
  let fixture: ComponentFixture<AppCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCollapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
