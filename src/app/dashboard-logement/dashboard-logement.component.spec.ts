import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLogementComponent } from './dashboard-logement.component';

describe('DashboardLogementComponent', () => {
  let component: DashboardLogementComponent;
  let fixture: ComponentFixture<DashboardLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLogementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
