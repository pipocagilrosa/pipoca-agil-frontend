import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThreeComponent } from './header-three.component';

describe('HeaderThreeComponent', () => {
  let component: HeaderThreeComponent;
  let fixture: ComponentFixture<HeaderThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderThreeComponent]
    });
    fixture = TestBed.createComponent(HeaderThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
