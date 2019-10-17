import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent,data: {animation: 'isProfile'} },
  { path: 'portofolio', component: PortofolioComponent,data: {animation: 'isPortofolio'} },
  { path: 'contact', component: ContactComponent,data: {animation: 'isContact'}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
