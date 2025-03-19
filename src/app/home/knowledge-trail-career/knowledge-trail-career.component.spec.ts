import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTrailCareerComponent } from './knowledge-trail-career.component';

describe('KnowledgeTrailCareerComponent', () => {
  let component: KnowledgeTrailCareerComponent;
  let fixture: ComponentFixture<KnowledgeTrailCareerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeTrailCareerComponent]
    });
    fixture = TestBed.createComponent(KnowledgeTrailCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
