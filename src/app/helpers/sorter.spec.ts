import { TestBed } from '@angular/core/testing';

import { Sorter } from './sorter';

describe('Sorter', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const sorter: Sorter = TestBed.get(Sorter);
        expect(sorter).toBeTruthy();
    });

    it('should sort descending on string values', () => {
        // Arrange
        const sorter: Sorter = TestBed.get(Sorter);
        var stringArray = [{key: 'a'}, {key: 'm'}, {key: 'z'}];

        // Act
        sorter.sort(stringArray, 'key', true);

        // Assert
        expect(stringArray[0].key).toEqual('z');
    });

    it('should sort ascending on string values', () => {
        // Arrange
        const sorter: Sorter = TestBed.get(Sorter);
        var stringArray = [{ key: 'z' }, { key: 'm' }, { key: 'a' }];

        // Act
        sorter.sort(stringArray, 'key', false);

        // Assert
        expect(stringArray[0].key).toEqual('a');
    });

    it('should sort descending on number values', () => {
        // Arrange
        const sorter: Sorter = TestBed.get(Sorter);
        var stringArray = [{ key: 0 }, { key: 1 }, { key: 2 }];

        // Act
        sorter.sort(stringArray, 'key', true);

        // Assert
        expect(stringArray[0].key).toEqual(2);
    });

    it('should sort ascending on number values', () => {
        // Arrange
        const sorter: Sorter = TestBed.get(Sorter);
        var stringArray = [{ key: 2 }, { key: 1 }, { key: 0 }];

        // Act
        sorter.sort(stringArray, 'key', false);

        // Assert
        expect(stringArray[0].key).toEqual(0);
    });
});
