import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSkillsComponent } from './new-skills.component';

describe('NewSkillsComponent', () => {
  let component: NewSkillsComponent;
  let fixture: ComponentFixture<NewSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
