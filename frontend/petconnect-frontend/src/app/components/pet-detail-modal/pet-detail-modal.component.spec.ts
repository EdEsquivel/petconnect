import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailModalComponent } from './pet-detail-modal.component';

describe('PetDetailModalComponent', () => {
  let component: PetDetailModalComponent;
  let fixture: ComponentFixture<PetDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetDetailModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
