import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTitlComponent } from './skill-titl.component';

describe('SkillTitlComponent', () => {
  let component: SkillTitlComponent;
  let fixture: ComponentFixture<SkillTitlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillTitlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillTitlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
