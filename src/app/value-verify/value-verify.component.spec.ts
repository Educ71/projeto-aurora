import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueVerifyComponent } from './value-verify.component';

describe('ValueVerifyComponent', () => {
  let component: ValueVerifyComponent;
  let fixture: ComponentFixture<ValueVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
