import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { HttpClient} from '@angular/common/http';
import { Info } from '../../interface';

const Details: string = 'http://localhost:3000/details';


@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }
  
  getInfo() :Observable<any> {
    return this.http.get<Info[]>(Details);
  }
}
