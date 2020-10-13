import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitListComponent } from './git-list.component';

describe('GitListComponent', () => {
  let component: GitListComponent;
  let fixture: ComponentFixture<GitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
