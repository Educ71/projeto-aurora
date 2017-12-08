import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraVerifyComponent } from './quadra-verify.component';

describe('QuadraVerifyComponent', () => {
  let component: QuadraVerifyComponent;
  let fixture: ComponentFixture<QuadraVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadraVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadraVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
