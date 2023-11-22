import { Component } from '@angular/core';

@Component({
  selector: 'app-create-company-verifications',
  templateUrl: './create-company-verifications.component.html',
  styleUrls: ['./create-company-verifications.component.css'],
})
export class CreateCompanyVerificationsComponent {
  rules = [];

  showDialog(id: number) {
    this.rules[id].visible = true;
  }

  ngOnInit() {
    this.rules = [
      {
        id: 0,
        title: 'Verify your e-mail address',
        subtitle:
          'With this simple email verification, you can increase your security and reassure your customers.',
        iconClass: 'pi pi-envelope',
        dialogHeader : "E-mail",
        visible: false,
      },
      {
        id: 1,
        title: 'Verify your phone',
        subtitle:
          'We will call or text you to confirm your number. Standard messaging fees may apply.',
        iconClass: 'pi pi-phone',
        dialogHeader : "Phone",
        visible: false,
      },
      {
        id: 2,
        title: 'Verify your tax number',
        subtitle:
          'You can register your trust by verifying your tax number and finding out whether it is a real company.',
        iconClass: 'pi pi-building',
        dialogHeader : "Tax Number",
        visible: false,
      },
    ];
  }
}
