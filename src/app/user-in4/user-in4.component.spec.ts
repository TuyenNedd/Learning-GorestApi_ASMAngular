import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIn4Component } from './user-in4.component';

describe('UserIn4Component', () => {
  let component: UserIn4Component;
  let fixture: ComponentFixture<UserIn4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserIn4Component]
    });
    fixture = TestBed.createComponent(UserIn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
