import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { HideComponentService } from 'src/app/core/services/hide-component/hide-component.service';
import { NavigationEnd, Router } from '@angular/router';
import { TmdbService } from 'src/app/core/services/TMDB/tmdb.service';
import { LockScrollService } from 'src/app/core/services/lock-scroll/lock-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('headerElement') headerElement!: ElementRef;
  @ViewChild('searchQuery') searchQuery!: ElementRef;
  @ViewChild('searchContainer') searchContainer!: ElementRef;
  @ViewChild('searchButton') searchButton!: ElementRef;

  isSticky: boolean = false;
  isVisible = true;
  minHeightValue!: number;
  isHomePage: boolean = false;
  isSearchBarOn: boolean = false;
  searchResults: any;
  isSearchResultOn: any;

  faSearch = faSearch;
  faBookmark = faBookmark;
  faUser = faUser;
  faTimes = faTimes;

  constructor(
    private el: ElementRef,
    private router: Router,
    private lockScrollService: LockScrollService,
    private hideComponentService: HideComponentService,
    private tmdbService: TmdbService
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

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;

    if (
      this.isSearchBarOn &&
      !this.searchContainer.nativeElement.contains(clickedElement)
    ) {
      this.isSearchBarOn = false;
      this.searchResults = null;
    }
  }

  ngOnInit() {
    this.isHomePage = this.router.url === '/';

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
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

  toggleSearchBar() {
    if (!this.isSearchBarOn) {
      setTimeout(() => {
        this.isSearchBarOn = true;

        setTimeout(() => {
          if (this.isSearchBarOn) this.searchQuery.nativeElement.focus();
        }, 0);
      }, 0.5);
    }
  }

  searchWhileTyping(query: string): void {
    if (query.length >= 3) {
      this.lockScrollService.lockScroll();
      this.isSearchResultOn = true;
      this.tmdbService.searchMovies(query).subscribe((res: any) => {
        this.searchResults = res.results;
      });
    } else {
      this.isSearchResultOn = false;
      this.lockScrollService.unlockScroll();
    }
  }
}
