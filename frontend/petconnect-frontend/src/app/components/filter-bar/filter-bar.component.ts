import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  @Output() filtersChanged = new EventEmitter<any>();
  
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      species: [''],
      breed: [''],
      ageRange: [''],
      size: [''],
    });
  }

  applyFilters() {
    this.filtersChanged.emit(this.filterForm.value);
  }

  resetFilters() {
    this.filterForm.reset();
    this.filtersChanged.emit({});
  }
}
