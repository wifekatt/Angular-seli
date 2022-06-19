import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voteperson1Component } from './voteperson1.component';

describe('Voteperson1Component', () => {
  let component: Voteperson1Component;
  let fixture: ComponentFixture<Voteperson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Voteperson1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Voteperson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
