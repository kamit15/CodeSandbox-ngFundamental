import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
@NgModule({
  declarations: [EventsAppComponent, EventsListComponent], //Add Component, Pipe, Directive
  imports: [BrowserModule], //Importing other modules, makes all of its exported declaration and providers available to this module
  providers: [], // Services
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
