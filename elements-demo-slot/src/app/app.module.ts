import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { ContainerModule } from './container/container.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { overrideRenderFactory } from '../shadow-dom-renderer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, ContainerModule],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [overrideRenderFactory()]
})
export class AppModule {
}
