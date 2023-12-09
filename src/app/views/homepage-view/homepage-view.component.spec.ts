import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageViewComponent } from './homepage-view.component';

describe('HomepageViewComponent', () => {
  let component: HomepageViewComponent;
  let fixture: ComponentFixture<HomepageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageViewComponent]
    });
    fixture = TestBed.createComponent(HomepageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
