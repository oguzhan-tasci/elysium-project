# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<div class="my-4 content">
  <p-table
    [value]="allDays"
    styleClass=" p-datatable-gridlines"
    [tableStyle]="{ 'min-width': '50rem' }"
    [scrollable]="true"
    scrollHeight="620px"
  >
    <ng-template pTemplate="header">
      <tr>
        <th>Saat / Gün</th>
        <th *ngFor="let item of daysName; let i = index">
          <div class="flex align-items-center flex-column">
            <span>{{ daysName[i] }}</span>
            <span> {{ dayOfMonth + i }}.{{ month }}.{{ year }}</span>
          </div>
        </th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-i="rowIndex" let-product>
      <tr class="tr">
        <td>{{ timesOfDay[i] }}- {{ timesOfDay[i + 1] }}</td>
        <td [ngClass]="getSeverity(product.monday)">
          {{ product.monday }}
        </td>
        <td [ngClass]="getSeverity(product.tuesday)">
          {{ product.tuesday }}
        </td>
        <td [ngClass]="getSeverity(product.wednesday)">
          {{ product.wednesday }}
        </td>
        <td [ngClass]="getSeverity(product.thursday)">
          {{ product.thursday }}
        </td>
        <td [ngClass]="getSeverity(product.friday)">{{ product.friday }}</td>
        <td [ngClass]="getSeverity(product.saturday)">
          {{ product.saturday }}
        </td>
        <td [ngClass]="getSeverity(product.sunday)">{{ product.sunday }}</td>
      </tr>
    </ng-template>

    <ng-template pTemplate="summary">
      <p class="text-center">
        Takvim ile ilgili herhangi bir sorununuzda
        <a routerLink="/">bizimle iletişime geçebilirsiniz.</a>
      </p>
    </ng-template>

  </p-table>
</div>
