import { Injectable } from '@angular/core';
import basicData from 'src/assets/portfolioContent/basicInfo.json';
import blogData from 'src/assets/portfolioContent/blogs.json';
import certicateData from 'src/assets/portfolioContent/certification.json';
import experianceData from 'src/assets/portfolioContent/experience.json';
import imageData from 'src/assets/portfolioContent/images.json';

@Injectable({
  providedIn: 'root'
})
export class ReadBasicInfoService {

  public basicInfo: any
  public blogs: any
  public certification: any
  public experience: any
  public images: any

  constructor() {
    this.basicInfo = basicData;
    this.blogs = blogData;
    this.certification = certicateData;
    this.experience = experianceData;
    this.images = imageData;
  }

  public getContactInfo() {
    return this.basicInfo.contactMe;
  }

  public getName() {
    return this.basicInfo.name;
    
  }

  public getLocation() {
    return this.basicInfo.location;
    
  }

  public getTagline() {
    return this.basicInfo.tagline;
    
  }
  public getSummary() {
    return this.basicInfo.summary;
    
  }
  public getLanguages() {
    return this.basicInfo.languages;
    
  }
  public getEmail() {
    return this.basicInfo.email;
    
  }
}
