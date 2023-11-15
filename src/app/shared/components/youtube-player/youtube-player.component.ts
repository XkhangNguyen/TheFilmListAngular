import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

let apiLoaded = false;
@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
})
export class YoutubePlayerComponent implements AfterViewInit {
  @ViewChild('youTubePlayer') youTubePlayer!: ElementRef<HTMLDivElement>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;

  @Input('videoID') videoID!: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    // Calculate the desired width as 80% of the screen width
    const screenWidth = window.innerWidth;
    this.videoWidth = screenWidth * 0.8;

    // Calculate the corresponding height to maintain the aspect ratio
    this.videoHeight = this.videoWidth * 0.6;

    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

  ngOnDestroy(): void {
    // Remove the YouTube API script when the component is destroyed
    const scriptElement = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    );
    if (scriptElement) {
      scriptElement.remove();
    }
  }
}
