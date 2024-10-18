// src/app/gender-prediction/gender-prediction.component.ts
import { Component } from '@angular/core';
import { GenderPredictionService } from '../gender-prediction.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gender-prediction',
  templateUrl: './gender-prediction.component.html',
  styleUrls: ['./gender-prediction.component.css']
})
export class GenderPredictionComponent {
  predictionForm: FormGroup;
  predictedGender: string | null = null;
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
    this.predictionForm = this.formBuilder.group({
      age: '',
      month_of_conception: ''
    });
  }

  onSubmit(): void {
    const payload = this.predictionForm.value;
    this.genderPredictionService.predictGender(payload).subscribe(response => {
      this.predictedGender = response.predicted_gender === 'M' ? 'Male' : 'Female';
    });
  }
}
