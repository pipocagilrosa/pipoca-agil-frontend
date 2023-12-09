import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataViewComponent } from './user-data-view.component';

describe('UserDataViewComponent', () => {
  let component: UserDataViewComponent;
  let fixture: ComponentFixture<UserDataViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDataViewComponent]
    });
    fixture = TestBed.createComponent(UserDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
