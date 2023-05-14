import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGithub, bootstrapInstagram, bootstrapLinkedin, bootstrapMedium, bootstrapYoutube } from '@ng-icons/bootstrap-icons';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { TilesComponent } from './components/tiles/tiles.component';
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [
    NavbarComponent,
    AccordionComponent,
    CardComponent,
    TilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    NgIconsModule.withIcons({ bootstrapLinkedin, bootstrapInstagram, bootstrapYoutube, bootstrapGithub, bootstrapMedium }),
  ],
  exports: [
    NavbarComponent,
    AccordionComponent,
    CardComponent,
    TilesComponent
  ]
})
export class SharedModule { }
