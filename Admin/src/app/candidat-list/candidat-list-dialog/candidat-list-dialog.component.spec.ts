import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatListDialogComponent } from './candidat-list-dialog.component';

describe('CandidatListDialogComponent', () => {
  let component: CandidatListDialogComponent;
  let fixture: ComponentFixture<CandidatListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
