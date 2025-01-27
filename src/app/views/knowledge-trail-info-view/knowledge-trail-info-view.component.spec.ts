import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTrailInfoViewComponent } from './knowledge-trail-info-view.component';

describe('KnowledgeTrailInfoViewComponent', () => {
  let component: KnowledgeTrailInfoViewComponent;
  let fixture: ComponentFixture<KnowledgeTrailInfoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeTrailInfoViewComponent]
    });
    fixture = TestBed.createComponent(KnowledgeTrailInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
