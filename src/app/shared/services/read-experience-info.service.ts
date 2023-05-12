import { Injectable } from '@angular/core';
import basicData from 'src/assets/portfolioContent/basicInfo.json';
import blogData from 'src/assets/portfolioContent/blogs.json';
import certicateData from 'src/assets/portfolioContent/certification.json';
import experianceData from 'src/assets/portfolioContent/experience.json';
import imageData from 'src/assets/portfolioContent/images.json';
import projectData from 'src/assets/portfolioContent/projects.json';
import skilldata from 'src/assets/portfolioContent/skills.json';

@Injectable({
  providedIn: 'root'
})
export class ReadExperienceInfoService {

  public basicInfo: any
  public blogs: any
  public certification: any
  public experience: any
  public images: any
  public projects: any
  public skills: any

  constructor() {
    this.basicInfo = basicData;
    this.blogs = blogData;
    this.certification = certicateData;
    this.experience = experianceData;
    this.images = imageData;
    this.projects = projectData;
    this.skills = skilldata;
  }


  public getCompany(i: number) {
    return this.experience[i].Company;
  }

  public getDuration(i: number) {
    return this.experience[i].Duration;

  }

  public getProjects(i: number) {
    return this.experience[i].Projects;

  }
}
