import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomeComponent } from './webcome.component';

describe('WebcomeComponent', () => {
  let component: WebcomeComponent;
  let fixture: ComponentFixture<WebcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
