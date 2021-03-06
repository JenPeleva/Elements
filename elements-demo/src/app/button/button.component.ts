import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `<button (click)="handleClick()"><ng-content></ng-content></button>Count: {{this.clicksCt }}`,
  styles: [`
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  //@Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
}
