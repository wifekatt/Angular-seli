import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voteperson3Component } from './voteperson3.component';

describe('Voteperson3Component', () => {
  let component: Voteperson3Component;
  let fixture: ComponentFixture<Voteperson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Voteperson3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Voteperson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
