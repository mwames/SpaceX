import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArraySorter {
    public sort(array, property, reverse) {
        property = property.split('.');

        array.sort((a, b) => {
            for (let i = 0; i < property.length; i += 1) {
                a = a[property[i]]; b = b[property[i]]
            }

            let type = typeof a;
            if (type === 'number' || type === 'boolean')
                return reverse ? b - a : a - b;
            else if (type === 'string')
                return reverse ? b.localeCompare(a) : a.localeCompare(b);
        });
    }
}