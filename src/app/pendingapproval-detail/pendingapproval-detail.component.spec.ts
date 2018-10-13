import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingapprovalDetailComponent } from './pendingapproval-detail.component';

describe('PendingapprovalDetailComponent', () => {
  let component: PendingapprovalDetailComponent;
  let fixture: ComponentFixture<PendingapprovalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingapprovalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingapprovalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
