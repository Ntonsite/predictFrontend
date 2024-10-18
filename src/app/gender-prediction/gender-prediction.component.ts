// src/app/gender-prediction/gender-prediction.component.ts
import { Component } from '@angular/core';
import { GenderPredictionService } from '../gender-prediction.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators

@Component({
  selector: 'app-gender-prediction',
  templateUrl: './gender-prediction.component.html',
  styleUrls: ['./gender-prediction.component.css']
})
export class GenderPredictionComponent {
  predictionForm: FormGroup;
  predictedGender: string | null = null;
  loading: boolean = false;
  // Add this to the GenderPredictionComponent (above the constructor)
months = [
  { value: 1, name: 'January' },
  { value: 2, name: 'February' },
  { value: 3, name: 'March' },
  { value: 4, name: 'April' },
  { value: 5, name: 'May' },
  { value: 6, name: 'June' },
  { value: 7, name: 'July' },
  { value: 8, name: 'August' },
  { value: 9, name: 'September' },
  { value: 10, name: 'October' },
  { value: 11, name: 'November' },
  { value: 12, name: 'December' }
];

  constructor(
    private genderPredictionService: GenderPredictionService,
    private formBuilder: FormBuilder
  ) {
    // Add Validators for the age control (18-45 inclusive)
    this.predictionForm = this.formBuilder.group({
      age: ['', [Validators.required, Validators.min(18), Validators.max(45)]],
      month_of_conception: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.predictionForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    this.loading = true;
    const payload = this.predictionForm.value;

    this.genderPredictionService.predictGender(payload).subscribe(response => {
      this.predictedGender = response.predicted_gender === 'M' ? 'Male' : 'Female';
      this.loading = false;
    }, error => {
      console.error("Error occurred:", error);
      this.loading = false;
    });
  }

  resetForm(): void {
    this.predictionForm.reset();
    this.predictedGender = null;
  }
}
