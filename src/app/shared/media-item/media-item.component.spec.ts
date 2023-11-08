import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemComponent } from './media-item.component';

describe('MediaItemComponent', () => {
  let component: MediaItemComponent;
  let fixture: ComponentFixture<MediaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaItemComponent]
    });
    fixture = TestBed.createComponent(MediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
