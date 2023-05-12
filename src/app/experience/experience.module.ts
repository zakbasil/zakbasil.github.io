import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { IndustryExperienceComponent } from './industry-experience/industry-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { NgIconsModule } from '@ng-icons/core';
import {matfAzureColored} from '@ng-icons/material-file-icons/colored'

@NgModule({
  declarations: [
    ProjectsComponent,
    IndustryExperienceComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    NgIconsModule.withIcons({matfAzureColored}),

  ]
})
export class ExperienceModule { }
