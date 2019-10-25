import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageInterface } from './message-interface';

const Address: string = "http://localhost:4000/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  addDetails(User): Observable<MessageInterface> {
    return this.http.post<MessageInterface>(`${Address}`, User);
  }
}