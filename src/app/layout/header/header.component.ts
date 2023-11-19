import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { HideComponentService } from 'src/app/core/services/hide-component/hide-component.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('headerElement') headerElement!: ElementRef;

  isSticky: boolean = false;
  isVisible = true;
  minHeightValue!: number;
  isHomePage: boolean = false;

  faSearch = faSearch;
  faBookmark = faBookmark;
  faUser = faUser;

  constructor(
    private el: ElementRef,
    private router: Router,
    private hideComponentService: HideComponentService
  ) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.isHomePage) {
      this.isSticky =
        0.1 * window.innerHeight > this.minHeightValue
          ? window.scrollY >= 0.9 * window.innerHeight
          : window.scrollY >= window.innerHeight - this.minHeightValue;
    } else {
      this.isSticky = true;
    }
  }

  ngOnInit() {
    // Initial check for home page
    this.isHomePage = this.router.url === '/';

    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the new route is the home page
        this.isHomePage = this.router.url === '/';
        this.checkScroll();
      }
    });
  }

  ngAfterViewInit() {
    this.minHeightValue = this.getMinHeight();
    this.hideComponentService.hideComponent$.subscribe((hide: boolean) => {
      this.isVisible = !hide;
    });
  }

  private getMinHeight(): number {
    const computedStyle = getComputedStyle(
      this.el.nativeElement.firstElementChild
    );
    return parseFloat(computedStyle.minHeight.replace('px', ''));
  }
}
