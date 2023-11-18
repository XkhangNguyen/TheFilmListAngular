import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { HideComponentService } from 'src/app/core/services/hide-component/hide-component.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('headerElement') headerElement!: ElementRef;

  isSticky: boolean = false;
  isVisible = true;
  minHeightValue!: number;

  faSearch = faSearch;
  faBookmark = faBookmark;
  faUser = faUser;

  constructor(
    private el: ElementRef,
    private hideComponentService: HideComponentService
  ) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky =
      0.1 * window.innerHeight > this.minHeightValue
        ? window.scrollY >= 0.9 * window.innerHeight
        : window.scrollY >= window.innerHeight - this.minHeightValue;
  }

  ngAfterViewInit() {
    this.minHeightValue = this.getMinHeight();
    this.checkScroll();
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
