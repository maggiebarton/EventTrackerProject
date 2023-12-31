import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerComponent } from './sneaker.component';

describe('SneakerComponent', () => {
  let component: SneakerComponent;
  let fixture: ComponentFixture<SneakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SneakerComponent]
    });
    fixture = TestBed.createComponent(SneakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
