import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCase implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    console.log({ value, toUpper });
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
