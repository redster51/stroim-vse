import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  saveToken(token: string): void {
    localStorage.setItem('admin', token);
  }

  getToken(): string {
    const token = localStorage.getItem('admin');
    return token ? token : null;
  }
}
