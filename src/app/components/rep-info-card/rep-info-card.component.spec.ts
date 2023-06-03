import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepInfoCardComponent } from './rep-info-card.component';

describe('RepInfoCardComponent', () => {
  let component: RepInfoCardComponent;
  let fixture: ComponentFixture<RepInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
