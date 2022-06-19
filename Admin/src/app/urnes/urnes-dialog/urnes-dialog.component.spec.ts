import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrnesDialogComponent } from './urnes-dialog.component';

describe('UrnesDialogComponent', () => {
  let component: UrnesDialogComponent;
  let fixture: ComponentFixture<UrnesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrnesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrnesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
