import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurDialogComponent } from './electeur-dialog.component';

describe('ElecteurDialogComponent', () => {
  let component: ElecteurDialogComponent;
  let fixture: ComponentFixture<ElecteurDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecteurDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecteurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
