import { Otel } from './app/myApp/models/Otel';

export const sample_otels: Otel[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1620254317747-06c748c22e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    location: 'Istanbul/Turkey',
    stars: '4',
    title: 'Staypineapple, Hotel Z, Gaslamp San Diego',
    price: '16000',
    countryFlag: 'https://flagsapi.com/TR/flat/16.png',
    companyLogo:
      'https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg',
    companyName: 'Lion King Hospital',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1653206182365-5d7983a46aec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    location: 'Santiago/Chile',
    stars: '5',
    title: 'Handlery Hotel San DiegoOpens in new window    ',
    price: '12000',
    countryFlag: 'https://flagsapi.com/CL/flat/16.png',

    companyLogo:
      'https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg',
    companyName: 'Eagle Hospital',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    location: 'Manama/Bahrain',
    stars: '5',
    title: 'Days Inn by Wyndham San Diego Hotel Circle',
    price: '24000',
    countryFlag: 'https://flagsapi.com/BH/flat/16.png',

    companyLogo:
      'https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg',
    companyName: 'Brave Bird Hospital',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    location: 'Vienna/Austria',
    stars: '4',
    title: 'Best Western Yacht Harbor HotelOpens in new window',
    price: '29000',
    countryFlag: 'https://flagsapi.com/AT/flat/16.png',

    companyLogo:
      'https://www.logovector.org/wp-content/uploads/medicalpark_logo2.png',
    companyName: 'Medical Park Hospital',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    location: 'Diyarbakir/Turkey',
    stars: '5',
    title: 'Manchester Grand Hyatt San DiegoOpens in new window',
    price: '50000',
    countryFlag: 'https://flagsapi.com/TR/flat/16.png',

    companyLogo:
      'data:image/jpeg;base64,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',
    companyName: 'Memorial Hospital',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    location: 'California / USA',
    stars: '5',
    title: 'Best professor in USA',
    price: '125000',
    countryFlag: 'https://flagsapi.com/USA/flat/16.png',

    companyLogo:
      'https://www.acibadem.com.tr/assets/images/acibadem-saglik-grubu-1200x675.png',
    companyName: 'Acibadem Hospital',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    location: 'Berlin / Germany',
    stars: '5',
    title: 'International Travelers House Adventure Hostel',
    price: '24100',
    countryFlag: 'https://flagsapi.com/DE/flat/16.png',

    companyLogo:
      'data:image/png;base64,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',
    companyName: 'American Hospita',
  },
  {
    id: 8,
    image:
      'https://plus.unsplash.com/premium_photo-1678297270837-990c65fd1b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    location: 'Delhi / India',
    stars: '4',
    title: 'The Westin San Diego Bayview',
    price: '15000',
    countryFlag: 'https://flagsapi.com/IN/flat/16.png',

    companyLogo:
      'https://pbs.twimg.com/profile_images/734700943904624641/9ew8E732_400x400.jpg',
    companyName: 'Kolan Hospital',
  },
];
