import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the TestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'example',
  templateUrl: 'example.html'
})
export class ExampleComponent {

  @Input() name;
  count: number = 0;
  @Output() returnFromComp: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('Hello TestComponent Component');
  }

  add() {
    this.count++;
    this.returnFromComp.emit(this.count);
  }

}
