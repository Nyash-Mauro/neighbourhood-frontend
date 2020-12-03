import { Component } from '@angular/core';
import alanBtn from '@alan-ai/alan-sdk-web';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'neighbourhood';
    alanBtnInstance;
  
  constructor(){
    this.alanBtnInstance = alanBtn({
      key: '869a11a7b131cace5fbb56277bf98bd42e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
    if (commandData.command === 'go:back') {
          //call client code that will react to the received command
        }
      },
    });
  }
}
