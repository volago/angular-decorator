import { Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.service';
import { Log } from './log.decorator';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private as: AnalyticsService) {}

  @Log()
  public async loginWithEmailAndPassword(email: string, password: string) {
    console.log('logged in');
  }
}
