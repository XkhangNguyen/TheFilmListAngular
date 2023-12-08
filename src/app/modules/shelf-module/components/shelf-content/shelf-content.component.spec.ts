import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfContentComponent } from './shelf-content.component';

describe('ShelfContentComponent', () => {
  let component: ShelfContentComponent;
  let fixture: ComponentFixture<ShelfContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelfContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShelfContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
