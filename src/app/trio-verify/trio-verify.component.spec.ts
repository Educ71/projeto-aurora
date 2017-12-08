import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrioVerifyComponent } from './trio-verify.component';

describe('TrioVerifyComponent', () => {
  let component: TrioVerifyComponent;
  let fixture: ComponentFixture<TrioVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrioVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrioVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
