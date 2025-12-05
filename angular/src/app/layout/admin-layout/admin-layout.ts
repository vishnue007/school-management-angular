import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {
  openMenu = {
    students: false,
    teachers: false,
  };

  toggleMenu(menu: 'students' | 'teachers') {
    this.openMenu[menu] = !this.openMenu[menu];
  }
}
