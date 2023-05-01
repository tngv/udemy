import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppCollapseComponent } from './app-collapse/app-collapse.component';
import { AppAccordionComponent } from './app-accordion/app-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppCollapseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppAccordionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
