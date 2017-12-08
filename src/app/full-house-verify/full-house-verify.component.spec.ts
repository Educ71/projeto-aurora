import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHouseVerifyComponent } from './full-house-verify.component';

describe('FullHouseVerifyComponent', () => {
  let component: FullHouseVerifyComponent;
  let fixture: ComponentFixture<FullHouseVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullHouseVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHouseVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
