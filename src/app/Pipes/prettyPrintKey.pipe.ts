import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string and remove underscore.
 * Takes a string as a value.
*/
@Pipe({ name: 'PrettyPrintKey' })
export class PrettyPrintKey implements PipeTransform {
    transform(value: string): string {
        if (value === null) return 'Not assigned';
        value = value.split('_').join(' ');
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}