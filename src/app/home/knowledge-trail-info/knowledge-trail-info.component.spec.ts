import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTrailInfoComponent } from './knowledge-trail-info.component';

describe('KnowledgeTrailInfoComponent', () => {
  let component: KnowledgeTrailInfoComponent;
  let fixture: ComponentFixture<KnowledgeTrailInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeTrailInfoComponent]
    });
    fixture = TestBed.createComponent(KnowledgeTrailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
