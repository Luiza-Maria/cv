import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';
import { HttpClient } from '@angular/common/http';
import { Educ } from "./education-interface";

const Address: string = "http://localhost:4000/education";

@Injectable({
  providedIn: 'root'
})
export class AddEducationService {

  constructor(private http: HttpClient) { }

  addEducation(value: Educ) :Observable<Educ> {
    return this.http.post<Educ>(`${Address}`, value);
  }
}
