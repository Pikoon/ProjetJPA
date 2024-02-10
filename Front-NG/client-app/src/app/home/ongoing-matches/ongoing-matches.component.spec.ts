import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingMatchesComponent } from './ongoing-matches.component';

describe('OngoingMatchesComponent', () => {
  let component: OngoingMatchesComponent;
  let fixture: ComponentFixture<OngoingMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingMatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngoingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
