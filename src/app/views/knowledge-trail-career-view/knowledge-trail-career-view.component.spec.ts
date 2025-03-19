import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTrailCareerViewComponent } from './knowledge-trail-career-view.component';

describe('KnowledgeTrailCareerViewComponent', () => {
  let component: KnowledgeTrailCareerViewComponent;
  let fixture: ComponentFixture<KnowledgeTrailCareerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeTrailCareerViewComponent]
    });
    fixture = TestBed.createComponent(KnowledgeTrailCareerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
