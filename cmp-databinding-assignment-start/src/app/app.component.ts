import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];
  onNumberSent(event: { gameNumber: number }) {
    const { gameNumber } = event;
    if(gameNumber % 2) {
      this.oddNumbers.push(gameNumber);
    } else {
      this.evenNumbers.push(gameNumber);
    }
  }
}
