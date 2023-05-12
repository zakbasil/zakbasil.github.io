import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturedBlogsComponent } from './featured-blogs/featured-blogs.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent,
    FeaturedBlogsComponent,
    FeaturedProjectsComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class HomepageModule { }
