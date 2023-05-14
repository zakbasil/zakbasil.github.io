import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturedBlogsComponent } from './featured-blogs/featured-blogs.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser'
import {MatDividerModule} from '@angular/material/divider';
import { FeaturedSkillsComponent } from './featured-skills/featured-skills.component';


@NgModule({
  declarations: [
    HomepageComponent,
    FeaturedBlogsComponent,
    FeaturedProjectsComponent,
    FeaturedSkillsComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    BrowserModule,
    MatDividerModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class HomepageModule { }
