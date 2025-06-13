import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  LogoImagePath: string;
  HeroImagePath: string;
  userName: string = '';
  password: string = '';
  error: string = '';
  userData = [
    {
      userName: 'Ink',
      password: 'test@1234',
      cardType: 'Ink',
      city: 'New York'
    },
    {
      userName: 'Freedom',
      password: 'test@1234',
      cardType: 'Freedom',
      city: 'Paris'
    },
    {
      userName: 'Sapphire',
      password: 'test@1234',
      cardType: 'Sapphire',
      city: 'London'
    },
    {
      userName: 'Reserve',
      password: 'test@1234',
      cardType: 'Reserve',
      city: 'Mumbai'
    }
  ];
  constructor(private readonly router: Router) {
    this.LogoImagePath = '../../assets/images/chase-travel-logo.png';
    this.HeroImagePath = '../../assets/images/travel-hero-2.png';
  }

  onLoginClick() {
    let user = this.userData.find((x) => x.userName === this.userName);
    if (this.userName && this.password && user?.password === this.password) {
      this.router.navigate(['/travel', {cardType: user.cardType,city: user.city}]);
    } else {
      this.error = 'Unauthorized User';
    }
  }
}
