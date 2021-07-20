import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
  counterUpdated = new EventEmitter<number>();
}
