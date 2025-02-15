import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTrailUxuiViewComponent } from './knowledge-trail-uxui-view.component';

describe('KnowledgeTrailUxuiViewComponent', () => {
  let component: KnowledgeTrailUxuiViewComponent;
  let fixture: ComponentFixture<KnowledgeTrailUxuiViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeTrailUxuiViewComponent]
    });
    fixture = TestBed.createComponent(KnowledgeTrailUxuiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
