import { provideRouter, RouterConfig } from '@angular/router';
import {HtmlComponent} from './html.component';
import {SilverlightComponent} from './silverlight.component';

export const routes: RouterConfig = [
  { path: '', component: HtmlComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'silverlight', component: SilverlightComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
