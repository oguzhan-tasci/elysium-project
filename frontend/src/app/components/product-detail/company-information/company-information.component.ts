import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pd-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css'],
})
export class CompanyInformationComponent implements OnInit {
  @ViewChild('info', { static: true }) info: ElementRef;

  constructor() {}
  ngOnInit(): void {
    console.log(this.info.nativeElement);
    const { x, y } = this.info.nativeElement.getBoundingClientRect();
    console.log(x);
    console.log(y);
  }
  ngAfterViewInit(): void {}
  onUpload(event) {
    console.log(event);
  }
}
