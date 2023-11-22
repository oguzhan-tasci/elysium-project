import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  @Input() name: string;
  @Input() imageUrl: string;
  @Input() flag: string;
  @Input() country: string;
  @Input() star: string;
  @Input() comment: string;
}
