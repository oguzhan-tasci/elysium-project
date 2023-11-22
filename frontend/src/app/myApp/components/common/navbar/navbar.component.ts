import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  visible: boolean = false;
  socialMedias: any;

  showDialog() {
    this.visible = true;
  }

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
}
