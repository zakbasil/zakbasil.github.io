import { Component } from '@angular/core';
import { ReadProjectInfoService } from 'src/app/shared/services/read-project-info.service';


@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {

  private readonly featuredProjects: ReadProjectInfoService
  public projects:any

  /**
   *
   */
  constructor(
    private readonly FeaturedProjects:ReadProjectInfoService
    ) {
 this.featuredProjects = FeaturedProjects;

  }

  public ngOnInit(){
    this.setFeaturedProjects()
  }

/**
 * setFeaturedProjects
 */
public setFeaturedProjects() {
  this.projects = this.featuredProjects.getFeaturedProjects();
  
}}
