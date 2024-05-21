import { Component } from '@angular/core';
import { FeedbackService } from '../_services/feedback.service';
import { Feedback } from '../_models/feedback';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback.component.html', // Update the path here
  styleUrls: ['./feedback.component.css']
})
export class FeedbackFormComponent {
  feedback: Feedback = {
    id: 0,
    name: '',
    rating: 0,
    comment: '',
    feedback: ''
  };

  constructor(private feedbackService: FeedbackService) { }

  onSubmit() {
    this.submitFeedback();// Logic to handle form submission
  }

  clearForm() {
    // Logic to clear the form
    this.feedback = {
      id: 0,
      name: '',
      rating: 0,
      comment: '',
      feedback: ''
    };
  }

  submitFeedback() {
    this.feedbackService.sendFeedback(this.feedback).subscribe(
      response => {
        console.log('Feedback submitted successfully');
        // Optionally, reset the form or show a success message
        this.clearForm(); // Clear the form after successful submission
      },
      error => {
        console.error('Error submitting feedback:', error);
        // Handle error: show error message or retry submission
      }
    );
  }
}
