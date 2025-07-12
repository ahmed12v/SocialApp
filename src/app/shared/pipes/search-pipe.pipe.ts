import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
