import { Injectable } from '@angular/core';
import skilldata from 'src/assets/portfolioContent/skills.json';

@Injectable({
  providedIn: 'root'
})
export class ReadSkillsService {

  public skills: any
  constructor() { 
    this.skills = skilldata;
  }

  public getSkills() {
    return this.skills;
    
  }
}
