import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {APP_ROUTER_PROVIDERS} from './routes.component';
import {Location,LocationStrategy,HashLocationStrategy} from '@angular/common';

bootstrap(
    AppComponent,
    [
     APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]
);
