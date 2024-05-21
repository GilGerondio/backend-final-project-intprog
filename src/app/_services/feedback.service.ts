import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../_models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:4000/reviews'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  sendFeedback(feedback: Feedback): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedback); // Sending POST request to /reviews endpoint
  }
}
