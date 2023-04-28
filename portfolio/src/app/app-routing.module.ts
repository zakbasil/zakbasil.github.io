import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{path: 'aboutme', component: AboutMeComponent},
                        {path: 'blogs', component: BlogsComponent},
                        {path: 'experience', component: ExperienceComponent},
                        {path: 'projects', component: ProjectsComponent},
                        {path: 'home', component: HomepageComponent},    
                        {path: '', redirectTo: '/home', pathMatch: 'full'},
                        {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
