import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Votelist3Component } from './votelist3.component';

describe('Votelist3Component', () => {
  let component: Votelist3Component;
  let fixture: ComponentFixture<Votelist3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Votelist3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Votelist3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
