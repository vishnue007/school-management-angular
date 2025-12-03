import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkActive, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
menuOpen = false;

constructor(private authService: AuthService, private router: Router) {}

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

get isAuthenticated(): boolean {
  return this.authService.isAuthenticated();
}

logout() {
  this.authService.removeToken();
  this.router.navigate(['/login']);
}
}
