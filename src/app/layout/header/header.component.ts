import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  topValue!: number;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= this.topValue;
  }

  ngOnInit() {
    this.checkScroll();
    this.topValue = parseFloat(this.getStyle('top'));
  }

  private getStyle(property: string): string {
    return getComputedStyle(this.el.nativeElement.firstChild).getPropertyValue(
      property
    );
  }
}
