import { Injectable } from '@angular/core';
import skilldata from 'src/assets/portfolioContent/skills.json';

@Injectable({
  providedIn: 'root'
})
export class ReadSkillsService {

  public skills: any
  featuredSkills: any;
  constructor() { 
    this.skills = skilldata;
  }

  public getSkills() {
    return this.skills;
    
  }
/**
 * getFeaturedSkills
 */
public getFeaturedSkills() {
  this.featuredSkills = []
  for (let index = 0; index < this.skills.length; index++) {
    if (this.skills[index]["Featured"] == true) {
      this.featuredSkills.push(this.skills[index])

    }
  }
  return this.featuredSkills
  
}

}
