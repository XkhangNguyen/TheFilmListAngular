import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  minHeightValue!: number;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky =
      0.1 * window.innerHeight > this.minHeightValue
        ? window.scrollY >= 0.9 * window.innerHeight
        : window.scrollY >= window.innerHeight - this.minHeightValue;
  }

  ngOnInit() {
    console.log(this.getMinHeight());
    console.log(0.1 * window.innerHeight);
    this.minHeightValue = this.getMinHeight();
    this.checkScroll();
  }

  private getMinHeight(): number {
    const computedStyle = getComputedStyle(this.el.nativeElement.firstChild);
    return parseFloat(computedStyle.minHeight.replace('px', ''));
  }
}
