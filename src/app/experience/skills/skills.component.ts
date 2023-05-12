import { Component } from '@angular/core';
import { ReadSkillsService } from 'src/app/shared/services/read-skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  private readonly Skills: ReadSkillsService
  public skills:any
  
  /**
   *
   */
  constructor(
    private readonly ReadSkills:ReadSkillsService
    ) {
 this.Skills = ReadSkills;

  }

  public ngOnInit(){
    this.setSkills()
  }

public setSkills() {
  this.skills = this.Skills.getSkills();
  
}

}
