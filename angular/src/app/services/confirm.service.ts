import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  isOpen = signal(false);
  message = signal('');
  private resolver: ((value: boolean) => void) | null = null;

  ask(message: string): Promise<boolean> {
    this.message.set(message);
    this.isOpen.set(true);

    return new Promise(resolve => {
      this.resolver = resolve;
    });
  }

  confirm() {
    this.isOpen.set(false);
    this.resolver?.(true);
  }

  cancel() {
    this.isOpen.set(false);
    this.resolver?.(false);
  }
}
