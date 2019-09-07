import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  // { path: 'home', component: ProfileComponent,data: {animation: 'isHome'} },
  { path: 'profile', component: ProfileComponent,data: {animation: 'isProfile'} },
  { path: 'experience', component:ExperienceComponent ,data: {animation: 'isExperience'}},
  { path: 'education', component: EducationComponent, data: { animation: 'isEducation' } },
  { path: 'portofolio', component: PortofolioComponent,data: {animation: 'isPortofolio'} },
  { path: 'contact', component: ContactComponent,data: {animation: 'isContact'}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
