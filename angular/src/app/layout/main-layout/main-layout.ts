import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
}
