import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { ContainerComponent } from './container.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  imports: [
    CommonModule, ButtonModule
  ],
  declarations: [ContainerComponent],
  entryComponents: [ContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerModule { 
  constructor(private injector: Injector) {
    const customParagraph = createCustomElement(ContainerComponent, { injector: injector });
    customElements.define('custom-container', customParagraph);
  }

  ngDoBootstrap() {}
}
