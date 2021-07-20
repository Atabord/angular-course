import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameNumberSent = new EventEmitter<{ gameNumber: number}>();
  interval;
  gameNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(){
    this.interval = setInterval(() => {
      this.gameNumber += 1;
      this.gameNumberSent.emit({
        gameNumber: this.gameNumber,
      })
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.interval)
  }
}
