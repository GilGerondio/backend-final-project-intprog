export interface Feedback {
    id: number;
    name: string;
    rating: number;
    comment: string;
    feedback: string;
    createdAt?: Date; // Make optional without assigning a value
    updatedAt?: Date; // Make optional without assigning a value
  }
  