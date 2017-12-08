import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenVerifyComponent } from './even-verify.component';

describe('EvenVerifyComponent', () => {
  let component: EvenVerifyComponent;
  let fixture: ComponentFixture<EvenVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
