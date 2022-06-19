import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Votelist1Component } from './votelist1.component';

describe('Votelist1Component', () => {
  let component: Votelist1Component;
  let fixture: ComponentFixture<Votelist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Votelist1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Votelist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
