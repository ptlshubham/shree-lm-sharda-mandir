import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReportsComponent } from './forms-reports.component';

describe('FormsReportsComponent', () => {
  let component: FormsReportsComponent;
  let fixture: ComponentFixture<FormsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
