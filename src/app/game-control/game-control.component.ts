import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() eventEmit = new EventEmitter<number>();

  interval;
  lastNumber=0;

  gameOn(){
    this.interval=setInterval(()=>{
      this.eventEmit.emit(this.lastNumber);
      this.lastNumber++;
    },1000)
  }

  gamePause(){
    clearInterval(this.interval);
  }
  ngOnInit() {
  }

}
