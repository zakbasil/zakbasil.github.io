import { Injectable } from '@angular/core';
import projectData from 'src/assets/portfolioContent/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ReadProjectInfoService {
  private projects: any[]
  private featuredProjects: any[]

 
  constructor() {
    this.projects = projectData;
    this.featuredProjects = [];
  }

  /**
   * getProjects
   */
  public getProjects() {
    return (this.projects)
  }

  /**
   * getFeaturedProjects
   */
  public getFeaturedProjects() {
    this.featuredProjects = []
    for (let index = 0; index < this.projects.length; index++) {
      if (this.projects[index]["featured"] == true) {
        this.featuredProjects.push(this.projects[index])

      }
    }
    return this.featuredProjects
  }
}
