import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  subject: Subject<boolean> = new Subject()
  isLogged: Observable<boolean> = this.subject.asObservable()

  constructor() { }
}
