import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AnalyticsService {
  user$: Observable<User> = of({ name: 'Yoda' });

  constructor() {}

  public logEvent(event: any) {
    this.user$.subscribe(user => {
      console.log('event', event);
      console.log('user', user);
    });
  }
}

export interface User {
  name: string;
}
