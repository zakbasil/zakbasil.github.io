import { Component } from '@angular/core';
import { ReadSkillsService } from 'src/app/shared/services/read-skills.service';

@Component({
  selector: 'app-featured-skills',
  templateUrl: './featured-skills.component.html',
  styleUrls: ['./featured-skills.component.css']
})
export class FeaturedSkillsComponent {
  private readonly featuredSkills: ReadSkillsService
  public skills:any

  /**
   *
   */
  constructor(
    private readonly FeaturedSkills:ReadSkillsService
    ) {
 this.featuredSkills = FeaturedSkills;

  }

  public ngOnInit(){
    this.setFeaturedSkills()
  }

/**
 * setFeaturedProjects
 */
public setFeaturedSkills() {
  this.skills = this.FeaturedSkills.getFeaturedSkills();
  
}
}
