import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
