import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPlaceholderComponent } from './header-placeholder.component';

describe('HeaderPlaceholderComponent', () => {
  let component: HeaderPlaceholderComponent;
  let fixture: ComponentFixture<HeaderPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
