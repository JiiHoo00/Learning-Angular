import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BooleanToText',
})
export class BooleanToTextPipe implements PipeTransform {
  transform(value: boolean, args?: any): string {
    if (value) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
}
