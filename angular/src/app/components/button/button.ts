import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button {

  @Input() label: string = "Button";
  @Input() type: string = "button";
  @Input() bg: string = "bg-blue-600";
  @Input() color: string = "text-white";
  @Input() icon: string = ""; // example: "fa fa-plus"
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
