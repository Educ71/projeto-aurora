import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroraVerifyComponent } from './aurora-verify.component';

describe('AuroraVerifyComponent', () => {
  let component: AuroraVerifyComponent;
  let fixture: ComponentFixture<AuroraVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuroraVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuroraVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
