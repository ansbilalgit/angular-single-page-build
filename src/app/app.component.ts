import { Component, Input } from '@angular/core';
declare const VERSION: string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  testInput: any;
  constructor() {
    debugger;
    // this.testInput = (<any>window).golf_widget_livescore_params;
    // if (this.testInput.hasOwnProperty('onLoaded')) {
    //   this.testInput.onLoaded();
    // }
  }

}
