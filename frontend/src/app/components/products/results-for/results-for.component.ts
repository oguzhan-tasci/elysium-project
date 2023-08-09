import { Component } from '@angular/core';

@Component({
  selector: 'p-results-for',
  templateUrl: './results-for.component.html',
  styleUrls: ['./results-for.component.css'],
})
export class ResultsForComponent {
  items: any[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Health' },
      { label: 'Istanbul' },
      { label: 'Hair Transplant' },
    ];
  }
}
