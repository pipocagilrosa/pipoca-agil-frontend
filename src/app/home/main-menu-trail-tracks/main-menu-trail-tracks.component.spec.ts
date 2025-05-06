import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuTrailTracksComponent } from './main-menu-trail-tracks.component';

describe('MainMenuTrailTracksComponent', () => {
  let component: MainMenuTrailTracksComponent;
  let fixture: ComponentFixture<MainMenuTrailTracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuTrailTracksComponent]
    });
    fixture = TestBed.createComponent(MainMenuTrailTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
