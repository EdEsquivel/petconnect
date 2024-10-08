import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePetComponent } from './create-pet.component';

describe('CreatePetComponent', () => {
  let component: CreatePetComponent;
  let fixture: ComponentFixture<CreatePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
