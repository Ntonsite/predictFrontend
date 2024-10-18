// src/app/gender-prediction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface GenderPredictionRequest {
  age: number;
  month_of_conception: number;
}

interface GenderPredictionResponse {
  age: number;
  month_of_conception: number;
  predicted_gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class GenderPredictionService {

  private apiUrl = 'http://localhost:8000/gender';

  constructor(private http: HttpClient) { }

  predictGender(payload: GenderPredictionRequest): Observable<GenderPredictionResponse> {
    return this.http.post<GenderPredictionResponse>(this.apiUrl, payload);
  }
}
