import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLogementComponent } from './liste-logement.component';

describe('ListeLogementComponent', () => {
  let component: ListeLogementComponent;
  let fixture: ComponentFixture<ListeLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLogementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
