import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencyVerifyComponent } from './sequency-verify.component';

describe('LwSequencyVerifyComponent', () => {
  let component: SequencyVerifyComponent;
  let fixture: ComponentFixture<SequencyVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencyVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencyVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
