import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/customizer/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomizerComponent } from './components/customizer/customizer.component';
import { AccordionComponent } from './components/customizer/sidebar/accordion/accordion.component';
import { AccordionGroupComponent } from './components/customizer/sidebar/accordion/accordion-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotFoundComponent,
    CustomizerComponent,
    AccordionComponent,
    AccordionGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
