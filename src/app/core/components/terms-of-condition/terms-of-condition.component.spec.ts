import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfConditionComponent } from './terms-of-condition.component';

describe('TermsOfConditionComponent', () => {
  let component: TermsOfConditionComponent;
  let fixture: ComponentFixture<TermsOfConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsOfConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsOfConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
