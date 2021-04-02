import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpTimeComponent } from './set-up-time.component';

describe('SetUpTimeComponent', () => {
  let component: SetUpTimeComponent;
  let fixture: ComponentFixture<SetUpTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUpTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
