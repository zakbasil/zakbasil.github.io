import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { SharedModule } from './shared/shared.module';
import { ExperienceModule } from './experience/experience.module';
import { BlogsModule } from './blogs/blogs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HomepageModule,
    ExperienceModule,
    BlogsModule,
    NgIconsModule.withIcons({bootstrapLinkedin}),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
