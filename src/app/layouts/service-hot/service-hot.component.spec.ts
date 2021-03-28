import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHotComponent } from './service-hot.component';

describe('ServiceHotComponent', () => {
  let component: ServiceHotComponent;
  let fixture: ComponentFixture<ServiceHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceHotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
