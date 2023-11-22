import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-create-company-logo',
  templateUrl: './create-company-logo.component.html',
  styleUrls: ['./create-company-logo.component.css'],
  providers: [MessageService],
})
export class CreateCompanyLogoComponent {
  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }
}
