import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pd-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css'],
})
export class CompanyInformationComponent implements OnInit {
  @ViewChild('info') info: ElementRef;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.info.nativeElement.style);
  }
}
