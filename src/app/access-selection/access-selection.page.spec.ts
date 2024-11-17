import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessSelectionPage } from './access-selection.page';

describe('AccessSelectionPage', () => {
  let component: AccessSelectionPage;
  let fixture: ComponentFixture<AccessSelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
