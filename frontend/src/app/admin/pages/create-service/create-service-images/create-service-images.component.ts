import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'create-service-images',
  templateUrl: './create-service-images.component.html',
  styleUrls: ['./create-service-images.component.css'],
  providers: [MessageService],
})
export class CreateServiceImagesComponent {
  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }
}
