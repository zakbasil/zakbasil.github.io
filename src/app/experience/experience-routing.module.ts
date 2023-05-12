import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustryExperienceComponent } from './industry-experience/industry-experience.component';

const routes: Routes = [
                        {path: 'experience', component: IndustryExperienceComponent}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
