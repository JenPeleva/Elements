import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-container',
  template: `<span><custom-button (action)="onClicksCt()">Click me</custom-button></span>`,
  encapsulation: ViewEncapsulation.Native
})
export class ContainerComponent {
  onClicksCt() {
    console.log("Clicks count!!!");
  }
}
