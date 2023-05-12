import { Component, OnInit } from '@angular/core';
import { ReadProjectInfoService } from 'src/app/shared/services/read-project-info.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  private readonly featuredProjects: ReadProjectInfoService
  public projects:any

  public descState:boolean = false

  /**
   *
   */
  constructor(
    private readonly FeaturedProjects:ReadProjectInfoService
    ) {
 this.featuredProjects = FeaturedProjects;

  }

  public ngOnInit(){
    this.projects = []
    this.setProjects()
  }

public setProjects() {
  this.projects = this.featuredProjects.getProjects();
  
}

public toggleDescState() {
  this.descState = !this.descState
}

}
