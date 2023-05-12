import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGithub, bootstrapInstagram, bootstrapLinkedin, bootstrapMedium, bootstrapYoutube } from '@ng-icons/bootstrap-icons';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({bootstrapLinkedin,bootstrapInstagram,bootstrapYoutube,bootstrapGithub,bootstrapMedium}),
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
