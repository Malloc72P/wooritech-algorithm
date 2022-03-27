import squareMatrixRotation from '../src/squareMatrixRotation';

describe('squareMatrixRotation', () => {
    it('should rotate matrix #0 in-place', () => {
        const matrix = [[]];

        const rotatedMatrix = [[]];

        expect(squareMatrixRotation(matrix)).toEqual(rotatedMatrix);
    });

    it('should rotate matrix #0 in-place', () => {
        const matrix = [[1]];

        const rotatedMatrix = [[1]];

        expect(squareMatrixRotation(matrix)).toEqual(rotatedMatrix);
    });

    it('should rotate matrix #1 in-place', () => {
        const matrix = [
            [1, 2],
            [3, 4],
        ];

        const rotatedMatrix = [
            [3, 1],
            [4, 2],
        ];

        expect(squareMatrixRotation(matrix)).toEqual(rotatedMatrix);
    });

    it('should rotate matrix #2 in-place', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        const rotatedMatrix = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ];

        expect(squareMatrixRotation(matrix)).toEqual(rotatedMatrix);
    });

    it('should rotate matrix #3 in-place', () => {
        const matrix = [
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16],
        ];

        const rotatedMatrix = [
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11],
        ];

        expect(squareMatrixRotation(matrix)).toEqual(rotatedMatrix);
    });

    it('should rotate matrix #4 in-place', () => {
        const matrix = [
            [5, 1, 9, 11, 17],
            [2, 4, 8, 10, 18],
            [13, 3, 6, 7, 19],
            [15, 14, 12, 16, 20],
            [21, 22, 23, 24, 25],
        ];

        const rotatedMatrix = [
            [21, 15, 13, 2, 5],
            [22, 14, 3, 4, 1],
            [23, 12, 6, 8, 9],
            [24, 16, 7, 10, 11],
            [25, 20, 19, 18, 17],
        ];

        expect(squareMatrixRotation(matrix)).toEqual(rotatedMatrix);
    });
});