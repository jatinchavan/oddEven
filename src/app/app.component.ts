import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odd-even-game';
  @Input() oddNumbers : number []=[];
  @Input() evenNumbers : number []=[];
  
  onEventEmit(lastNumber){
    if(lastNumber % 2 === 0){
      this.evenNumbers.push(lastNumber);
    }
    else{
      this.oddNumbers.push(lastNumber);
    }
  }
}
