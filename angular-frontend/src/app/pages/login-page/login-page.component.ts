import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../models/user-dto';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  user!: UserDTO;
  errorMessage!: string;
  AuthUserSub!: Subscription;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next: user => {
        if (user) {
          this.router.navigate(['/']);
        }
      }
    })
    this.user = { email: '', password: '', roles: '' };
  }

  login(): void {
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: userData => {
        this.router.navigate(['/']);
      },
      error: err => {
        this.errorMessage = err;
        console.log(err);
      }

    })
  }

  navigateToDashPage(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.AuthUserSub.unsubscribe();
  }

}
