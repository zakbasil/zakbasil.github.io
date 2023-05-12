import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryExperienceComponent } from './industry-experience.component';

describe('IndustryExperienceComponent', () => {
  let component: IndustryExperienceComponent;
  let fixture: ComponentFixture<IndustryExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
