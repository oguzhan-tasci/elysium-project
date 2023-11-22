import { Component } from '@angular/core';

@Component({
  selector: 'service-component-list-of-services',
  templateUrl: './component-list-of-services.component.html',
  styleUrls: ['./component-list-of-services.component.css'],
})
export class ComponentListOfServicesComponent {
  cols = [];
  services = [];
  selectedProducts!: any;
  ngOnInit() {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
    ];
    this.services = [
      {
        id: 1,
        name: 'Medical Park specialist doctors nose aesthetics',
        image:
          'https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        price: 15999,
        category: 'Health',
        status: 'Active',
        countryName: 'Turkey',
        countryFlag: 'https://flagsapi.com/TR/flat/24.png',
        rating: 5,
        date: '5 days ago',
      },
      {
        id: 2,
        name: 'Hair transplantation is performed at Acıbadem Hospital',
        image:
          'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 19999,
        category: 'Health',
        status: 'Active',
        countryName: 'Australia',
        countryFlag: 'https://flagsapi.com/AT/flat/24.png',
        rating: 4,
        date: '6 days ago',
      },
      {
        id: 3,
        name: 'The address of stomach surgery is Memorial Hospital',
        image:
          'https://images.unsplash.com/photo-1664902276790-90624a60ff47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 24149,
        category: 'Health',
        status: 'Active',
        countryName: 'Belgium',
        countryFlag: 'https://flagsapi.com/BE/flat/24.png',
        rating: 5,
        date: '10 days ago',
      },
      {
        id: 4,
        name: 'A clean rhinoplasty in Florence hospitals',
        image:
          'https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        price: 17999,
        category: 'Health',
        status: 'Deactive',
        countryName: 'Brazil',
        countryFlag: 'https://flagsapi.com/BR/flat/24.png',
        rating: 3,
        date: '20 Oct',
      },
      {
        id: 5,
        name: 'NP hospitals perform the best brain surgery in the world',
        image:
          'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80',
        price: 56999,
        category: 'Health',
        countryName: 'Canada',
        countryFlag: 'https://flagsapi.com/CA/flat/24.png',
        status: 'Pending',
        rating: 0,
        date: '21 Jam',
      },
      {
        id: 6,
        name: 'The best location for your teeth Bilge Hospital',
        image:
          'https://images.unsplash.com/photo-1533042789716-e9a9c97cf4ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        price: 10999,
        category: 'Health',
        status: 'Active',
        countryName: 'Switzerland',
        countryFlag: 'https://flagsapi.com/CH/flat/24.png',
        rating: 3,
        date: '7 Aug',
      },
      {
        id: 7,
        name: 'Get rid of your weight with Vaidam Health',
        image:
          'https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        price: 15999,
        category: 'Health',
        status: 'Active',
        countryName: 'United Kingdom',
        countryFlag: 'https://flagsapi.com/GB/flat/24.png',
        rating: 5,
        date: '1 Month ago',
      },
      {
        id: 8,
        name: 'Medical Park specialist doctors nose aesthetics',
        image:
          'https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        price: 15999,
        category: 'Health',
        status: 'Active',
        countryName: 'Turkey',
        countryFlag: 'https://flagsapi.com/TR/flat/24.png',
        rating: 5,
        date: '14 days ago',
      },
      {
        id: 9,
        name: 'Hair transplantation is performed at Acıbadem Hospital',
        image:
          'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 19999,
        category: 'Health',
        status: 'Active',
        countryName: 'Hungary',
        countryFlag: 'https://flagsapi.com/HU/flat/24.png',
        rating: 4,
        date: '5 days ago',
      },
      {
        id: 10,
        name: 'The address of stomach surgery is Memorial Hospital',
        image:
          'https://images.unsplash.com/photo-1664902276790-90624a60ff47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 24149,
        category: 'Health',
        status: 'Active',
        countryName: 'Turkey',
        countryFlag: 'https://flagsapi.com/TR/flat/24.png',
        rating: 5,
        date: '23 Feb',
      },
    ];
  }
  getSeverity(status: string) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Deactive':
        return 'danger';
    }
    return null;
  }
}
