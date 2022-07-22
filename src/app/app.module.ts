import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {MainComponent} from './layout/main/main.component';
import {SideNavComponent} from './layout/side-nav/side-nav.component';
import {AkaiModule} from "./akai/akai.module";
import {SharedModule} from "./shared/shared.module";
import { HomeComponent } from './layout/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    SharedModule,
    AkaiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
