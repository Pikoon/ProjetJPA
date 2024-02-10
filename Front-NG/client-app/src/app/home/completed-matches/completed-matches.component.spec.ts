import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedMatchesComponent } from './completed-matches.component';

describe('CompletedMatchesComponent', () => {
  let component: CompletedMatchesComponent;
  let fixture: ComponentFixture<CompletedMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedMatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
