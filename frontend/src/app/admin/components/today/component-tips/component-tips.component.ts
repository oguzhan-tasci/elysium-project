import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component-tips',
  templateUrl: './component-tips.component.html',
  styleUrls: ['./component-tips.component.css'],
})
export class ComponentTipsComponent {
  tips = [];

  ngOnInit() {
    this.tips = [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        title: 'İşletmelerden alinan kesintiler nelerdir?',
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Gelin fiyatlandirma stratejinizi belirleyelim',
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
        title: 'Takviminizi düzenlemenin en iyi yollari',
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80',
        title: 'Uygun bir profil nasil oluşturulur?',
      },
    ];
  }
}
