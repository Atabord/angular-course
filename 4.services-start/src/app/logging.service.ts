import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' }) //no es necesario porque no estamos inyectando nada aquí pero se recomienda
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
