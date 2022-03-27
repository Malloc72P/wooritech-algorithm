/**
 * n x n 2차원 행렬이 제공됩니다. 행렬을 90도(시계 방향) 회전해야 합니다.
 * 단, 이미지를 제자리에서 회전하는 방식으로 구현해야 하므로 입력된 2차원 행렬을 직접 수정해야 합니다.
 * 다른 행렬에 값을 할당하고 회전하지 않습니다.
 * 행렬의 외곽에서 시작해서, 안쪽으로 들어가면서 회전을 수행합니다.
 * 행렬의 한칸씩 시계방향으로 90도 회전시켰습니다.
 * 맨 아래는 왼쪽으로, 오른쪽은 아래로, 맨 위는 오른쪽으로 덮어쓰는 식으로 회전을 구현했습니다.
 * 다만, 이렇게 하면 왼쪽에 있는 칸은 값이 덮어써져버립니다.
 * 그래서 회전하기 전에 왼쪽 면에 해당하는 칸의 값을 임시변수에 저장해두었습니다.
 * 그리고 왼쪽을 맨 위로 덮어쓰기할때엔 임시변수에 저장된 값을 꺼내어 사용하도록 구현했습니다.
 * @param matrix 회전시킬 2차원 행렬
 */
export default function squareMatrixRotation(matrix) {
    const matrixLength = matrix.length;
    const leftTop = {r: 0, c: 0};
    const rightTop = {r: 0, c: matrixLength - 1};
    const rightBottom = {r: matrixLength - 1, c: matrixLength - 1};
    const leftBottom = {r: matrixLength - 1, c: 0};

    //행렬의 외곽에서 시작해서, 안쪽으로 들어가면서 회전을 수행합니다.
    //좌상단의 행이 우하단의 행과 같거나 작아지면 더 이상 내부에 행렬이 존재하지 않는 것이므로 루프를 종료합니다.
    while (leftTop.r <= rightBottom.r) {
        const currentMatrixLength = rightTop.c - leftTop.c;
        for (let i = 0; i < currentMatrixLength; i++) {
            //행렬의 셀 하나만 임시변수에 저장합니다
            const leftTopTempValue = matrix[leftTop.r + i][leftTop.c];
            //행렬을 90도 회전합니다
            matrix[leftTop.r + i][leftTop.c] = matrix[leftBottom.r][leftBottom.c + i];
            matrix[leftBottom.r][leftBottom.c + i] = matrix[rightBottom.r - i][rightBottom.c];
            matrix[rightBottom.r - i][rightBottom.c] = matrix[rightTop.r][rightTop.c - i];
            //마지막 한칸에는 임시변수에 저장해두었던 값을 꺼내서 변경해줍니다.
            matrix[rightTop.r][rightTop.c - i] = leftTopTempValue;
        }
        //행렬의 외곽에서 안쪽으로 한칸씩 이동합니다.
        moveRightBottom(leftTop);
        moveLeftBottom(rightTop);
        moveRightTop(leftBottom);
        moveLeftTop(rightBottom);
    }
    //변경된 행렬을 반환합니다.
    return matrix;
}

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