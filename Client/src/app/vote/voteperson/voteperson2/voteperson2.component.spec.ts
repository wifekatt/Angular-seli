import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voteperson2Component } from './voteperson2.component';

describe('Voteperson2Component', () => {
  let component: Voteperson2Component;
  let fixture: ComponentFixture<Voteperson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Voteperson2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Voteperson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
