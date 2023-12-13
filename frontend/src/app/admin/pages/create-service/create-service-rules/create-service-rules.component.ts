import { Component } from '@angular/core';

@Component({
  selector: 'create-service-rules',
  templateUrl: './create-service-rules.component.html',
  styleUrls: ['./create-service-rules.component.css'],
})
export class CreateServiceRulesComponent {
  values: string[];

  ngOnInit() {
    this.saveRules(this.values);
  }
  saveRules(event: any) {
    let rules = [];
    if (event == undefined) {
      throw Error('At least you have to provide 1 rule');
    } else {
      window.localStorage.setItem('service-rules', event);
    }
  }
}
