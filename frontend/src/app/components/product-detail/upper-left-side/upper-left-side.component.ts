import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'pd-upper-left-side',
  templateUrl: './upper-left-side.component.html',
  styleUrls: ['./upper-left-side.component.css'],
})
export class UpperLeftSideComponent {
  images: any[] | undefined;
  thumbnailImages: any[] | undefined;

  constructor(private imageService: ServicesService) {}

  ngOnInit() {
    this.images = this.imageService.getAllImages();
    this.thumbnailImages = [
      {
        id: 1,
        thumbnail:
          'https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        alt: 'resim1',
      },
      {
        id: 2,
        thumbnail:
          'https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        alt: 'resim1',
      },
      {
        id: 3,
        thumbnail:
          'https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        alt: 'resim1',
      },
      {
        id: 4,
        thumbnail:
          'https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        alt: 'resim1',
      },
    ];
    // this.images = [
    //   {
    //     itemImageSrc : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //     thumbnailImageSrc : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //     alt : 'title 1',
    //     title : 'Title 1',
    //   },
    //   {
    //     itemImageSrc : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //     thumbnailImageSrc : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //     alt : 'title 1',
    //     title : 'Title 1',
    //   },
    //   {
    //     itemImageSrc : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //     thumbnailImageSrc : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //     alt : 'title 1',
    //     title : 'Title 1',
    //   },
    //   {
    //     itemImageSrc : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //     thumbnailImageSrc : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //     alt : 'title 1',
    //     title : 'Title 1',
    //   },
    // ]
  }
}
