import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent}

];

const config : ExtraOptions ={
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
