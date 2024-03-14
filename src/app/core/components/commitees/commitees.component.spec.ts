import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteesComponent } from './commitees.component';

describe('CommiteesComponent', () => {
  let component: CommiteesComponent;
  let fixture: ComponentFixture<CommiteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommiteesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommiteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
