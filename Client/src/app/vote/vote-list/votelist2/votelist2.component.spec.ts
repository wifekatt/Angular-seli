import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Votelist2Component } from './votelist2.component';

describe('Votelist2Component', () => {
  let component: Votelist2Component;
  let fixture: ComponentFixture<Votelist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Votelist2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Votelist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
