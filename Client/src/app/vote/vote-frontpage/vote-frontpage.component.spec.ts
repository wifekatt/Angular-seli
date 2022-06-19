import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteFrontpageComponent } from './vote-frontpage.component';

describe('VoteFrontpageComponent', () => {
  let component: VoteFrontpageComponent;
  let fixture: ComponentFixture<VoteFrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteFrontpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
