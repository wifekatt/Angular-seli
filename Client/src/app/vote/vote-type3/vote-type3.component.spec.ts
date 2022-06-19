import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteType3Component } from './vote-type3.component';

describe('VoteType3Component', () => {
  let component: VoteType3Component;
  let fixture: ComponentFixture<VoteType3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteType3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteType3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
