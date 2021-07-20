import { Injectable } from "@angular/core";
import { CounterService } from "src/counter.service";

@Injectable({ providedIn: 'root' })
export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] =  ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  updateStatus(id: number, status: 'active' | 'inactive') {
    if(status === "active") {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
    } else {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
    }
    this.counterService.counterUpdated.emit(1);
  }
}
