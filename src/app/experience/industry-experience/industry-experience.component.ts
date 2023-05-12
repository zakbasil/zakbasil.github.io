import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ReadExperienceInfoService } from 'src/app/shared/services/read-experience-info.service';

@Component({
  selector: 'app-industry-experience',
  templateUrl: './industry-experience.component.html',
  styleUrls: ['./industry-experience.component.css']
})
export class IndustryExperienceComponent {

  constructor(
    private readonly readInfo: ReadExperienceInfoService,
    private readonly titleService:Title
  ) {
this.titleService.setTitle('Experience')
  }
  public readonly company = this.readInfo.getCompany(0);
  public readonly duration = this.readInfo.getDuration(0);
  public  projects:any;
  public  projectName:any;
  public  projectObjectives:any;
  public  projectSkills:any;

  ngOnInit(){
    this.projectsDetails(0);
  }
  
  public projectsDetails(i:number) {
     this.projects = this.readInfo.getProjects(i);
    
  }

}
