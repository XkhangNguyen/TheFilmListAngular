import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LockScrollService {
  private isScrollLocked = false;

  lockScroll() {
    this.isScrollLocked = true;
    document.body.style.overflow = 'hidden';
  }

  unlockScroll() {
    this.isScrollLocked = false;
    document.body.style.overflow = '';
  }

  isScrollingLocked() {
    return this.isScrollLocked;
  }
}
