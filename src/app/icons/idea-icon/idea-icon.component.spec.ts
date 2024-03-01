import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaIconComponent } from './idea-icon.component';

describe('IdeaIconComponent', () => {
  let component: IdeaIconComponent;
  let fixture: ComponentFixture<IdeaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdeaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
