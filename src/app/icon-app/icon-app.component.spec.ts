import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAppComponent } from './icon-app.component';

describe('IconAppComponent', () => {
  let component: IconAppComponent;
  let fixture: ComponentFixture<IconAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconAppComponent]
    });
    fixture = TestBed.createComponent(IconAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
