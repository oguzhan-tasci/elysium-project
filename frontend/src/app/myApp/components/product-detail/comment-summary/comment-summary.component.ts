import { Component } from '@angular/core';

@Component({
  selector: 'pd-comment-summary',
  templateUrl: './comment-summary.component.html',
  styleUrls: ['./comment-summary.component.css'],
})
export class CommentSummaryComponent {
  firstColumn: any[] = [
    { id: 1, value: 50, title: 'Cleaning & Service' },
    { id: 2, value: 70, title: 'Communication' },
    { id: 3, value: 80, title: 'Welcoming' },
  ];
  secondColumn: any[] = [
    { id: 1, value: 60, title: 'Accuracy Of Service' },
    { id: 2, value: 40, title: 'Location & Accessibility' },
    { id: 3, value: 90, title: 'Price/Performance' },
  ];
}
