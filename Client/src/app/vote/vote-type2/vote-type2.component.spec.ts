import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteType2Component } from './vote-type2.component';

describe('VoteType2Component', () => {
  let component: VoteType2Component;
  let fixture: ComponentFixture<VoteType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteType2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
