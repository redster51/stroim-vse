import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";

interface Admin {
  login: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token = 'Bearer ' + this.tokenService.getToken();

  options = {
    headers: {
      Authorization: this.token
    }
  }

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  registerAdmin(admin: Admin): Observable<any> {
    return this.http.post('/api/api/register', admin);
  }

  signInAdmin(admin: Admin): Observable<any> {
    return this.http.post('/api/api/signin', admin, this.options);
  }
}
