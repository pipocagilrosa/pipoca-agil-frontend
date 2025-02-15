import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTrailUxuiComponent } from './knowledge-trail-uxui.component';

describe('KnowledgeTrailUxuiComponent', () => {
  let component: KnowledgeTrailUxuiComponent;
  let fixture: ComponentFixture<KnowledgeTrailUxuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeTrailUxuiComponent]
    });
    fixture = TestBed.createComponent(KnowledgeTrailUxuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
