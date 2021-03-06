import {
  Component,
  OnsRange,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from '../src/ngx-onsenui';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">Range Example</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      <div style="text-align: center; margin: 10px">
        <ons-range id="range" [(value)]="value"></ons-range><br>
        <ons-range modifier="material" [(value)]="value"></ons-range><br>
        <span id="value">
          {{ value }}
        </span>
      </div>
    </div>
  </ons-page>
  `
})
export class AppComponent {
  value: string = '10';
  constructor() { }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
