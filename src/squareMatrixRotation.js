/**
 * n x n 2차원 행렬이 제공됩니다. 행렬을 90도(시계 방향) 회전해야 합니다.
 * 단, 이미지를 제자리에서 회전하는 방식으로 구현해야 하므로 입력된 2차원 행렬을 직접 수정해야 합니다.
 * 다른 행렬에 값을 할당하고 회전하지 않습니다.
 * @param matrix 회전시킬 2차원 행렬
 */
export default function squareMatrixRotation(matrix) {
    const matrixLength = matrix.length;
    const leftTop = {r: 0, c: 0};
    const rightTop = {r: 0, c: matrixLength - 1};
    const rightBottom = {r: matrixLength - 1, c: matrixLength - 1};
    const leftBottom = {r: matrixLength - 1, c: 0};
    while (leftTop.r <= rightBottom.r) {
        const currentMatrixLength = rightTop.c - leftTop.c;
        for (let i = 0; i < currentMatrixLength; i++) {
            const leftTopTempValue = matrix[leftTop.r + i][leftTop.c];
            matrix[leftTop.r + i][leftTop.c] = matrix[leftBottom.r][leftBottom.c + i];
            matrix[leftBottom.r][leftBottom.c + i] = matrix[rightBottom.r - i][rightBottom.c];
            matrix[rightBottom.r - i][rightBottom.c] = matrix[rightTop.r][rightTop.c - i];
            matrix[rightTop.r][rightTop.c - i] = leftTopTempValue;
        }
        moveRightBottom(leftTop);
        moveLeftBottom(rightTop);
        moveRightTop(leftBottom);
        moveLeftTop(rightBottom);
    }
    return matrix;
};

function moveLeftBottom(point) {
    moveLeft(point);
    moveBottom(point);
}

function moveRightBottom(point) {
    moveRight(point);
    moveBottom(point);
}

function moveLeftTop(point) {
    moveLeft(point);
    moveTop(point);
}

function moveRightTop(point) {
    moveRight(point);
    moveTop(point);
}

function moveLeft(point) {
    point.c--;
}

function moveRight(point) {
    point.c++;
}

function moveTop(point) {
    point.r--;
}

function moveBottom(point) {
    point.r++;
}