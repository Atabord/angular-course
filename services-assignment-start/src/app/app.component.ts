import { Component } from '@angular/core';
import { CounterService } from 'src/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  constructor(private counterService: CounterService) {
    counterService.counterUpdated.subscribe((event) => {
      this.count += event;
    })
  }
}
