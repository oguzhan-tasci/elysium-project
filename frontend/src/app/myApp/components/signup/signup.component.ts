import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  visible: boolean = false;
  socialMedias: any;

  ngOnInit() {
    this.socialMedias = [
      {
        id: 1,
        label: 'Facebook ile devam et',
        iconClass: 'pi pi-facebook',
        styleClass: 'p-button-outlined mb-3 w-12 text-center',
      },
      {
        id: 1,
        label: 'Google ile devam et',
        iconClass: 'pi pi-google',
        styleClass: 'p-button-outlined mb-3 w-12 text-center p-button-danger',
      },
      {
        id: 1,
        label: 'Numara ile devam et',
        iconClass: 'pi pi-phone',
        styleClass:
          'p-button-outlined mb-3 w-12 text-center p-button-secondary',
      },
    ];
  }

  showDialog() {
    this.visible = true;
  }
}
