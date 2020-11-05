import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  adminForm = {
    login: '',
    password: ''
  }

  constructor(private authService: AuthenticationService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.router.navigate(['vanya-admin']);
    }
  }

  register() {
    console.log(this.adminForm);
    this.authService.registerAdmin(this.adminForm).subscribe((data) => {
      console.log(data);
    }, (error => {
      console.log(error);
    }));
  }

  signIn() {
    this.authService.signInAdmin(this.adminForm).subscribe((user) => {
      console.log(user);
      this.tokenService.saveToken(user.token);
      this.router.navigate(['vanya-admin']);
    }, (error) => {
      console.log(error);
    });
  }
}
