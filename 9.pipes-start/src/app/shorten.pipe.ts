import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform{
  transform(value: unknown, limit: number) {
    return `${value}`.substr(0,limit) + '...';
  }
}
