import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

import { FeedbackFormComponent } from './feedback.component';

@NgModule({
  declarations: [
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Add FormsModule here
  ]
})
export class FeedbackModule { }
