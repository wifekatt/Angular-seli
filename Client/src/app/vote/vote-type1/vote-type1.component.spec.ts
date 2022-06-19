import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteType1Component } from './vote-type1.component';

describe('VoteType1Component', () => {
  let component: VoteType1Component;
  let fixture: ComponentFixture<VoteType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteType1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
