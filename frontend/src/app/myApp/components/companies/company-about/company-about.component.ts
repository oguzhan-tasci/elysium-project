import { Component } from '@angular/core';

@Component({
  selector: 'c-company-about',
  templateUrl: './company-about.component.html',
  styleUrls: ['./company-about.component.css'],
})
export class CompanyAboutComponent {
  listOfServices = [];
  aboutCompany = [];

  ngOnInit() {
    this.listOfServices = [
      {
        id: 1,
        iconClass: 'font-semibold pi pi-thumbs-up',
        value: 'Türkçe,İngilizce ve Almanca dilleriyle hizmet veriyoruz.',
      },
      {
        id: 2,
        iconClass: 'font-semibold pi pi-map-marker',
        value: "Türkiye'de Istanbul,İzmir ve Ankara'da hizmet veriyoruz.",
      },
    ];
    this.aboutCompany = [
      {
        id: 1,
        paragh:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti molestias culpa libero modi tempore ipsam deserunt. Laboriosam repellat tempora unde necessitatibus eius quisquam nesciunt. Similique explicabo officiis natus aliquid nam quo, quibusdam veniam iste. Perspiciatis blanditiis laborum nobis et earum?',
      },
      {
        id: 2,
        paragh:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi ab adipisci repudiandae officia. Cupiditate voluptatem aspernatur corporis sit et?',
      },
      {
        id: 3,
        paragh:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur magni quidem incidunt animi nesciunt pariatur.',
      },
    ];
  }
}
