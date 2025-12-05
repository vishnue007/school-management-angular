import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  openMenu = {
    students: false,
    teachers: false,
  };

  toggleMenu(menu: 'students' | 'teachers') {
    this.openMenu[menu] = !this.openMenu[menu];
  }
}
