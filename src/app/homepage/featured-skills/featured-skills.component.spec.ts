import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSkillsComponent } from './featured-skills.component';

describe('FeaturedSkillsComponent', () => {
  let component: FeaturedSkillsComponent;
  let fixture: ComponentFixture<FeaturedSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
