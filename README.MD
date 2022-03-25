# 문제 1 : 피보나치 수열
## 코드
```javascript
export default function fibonacci(n) {
    //입력인자의 값이 0 이하면 빈 배열을 반환
    if (n <= 0) {
        return [];
    }
    //피보나치 수열의 첫 두값을 담고 있는 배열 선언
    const answer = [0, 1];
    //입력인자 n까지 반복하면서 새로운 피보나치 수를 answer배열의 뒤에 추가
    for (let i = 1; i < n; i++) {
        const a1 = answer[answer.length - 2];
        const a2 = answer[answer.length - 1];
        answer.push(a1 + a2);
    }
    //answer배열의 맨 앞에 있는 0을 제거
    answer.splice(0, 1);
    return answer;
}
```
## 풀이방법
- 입력인자 n의 값이 0 이하라면 빈 배열을 반환하도록 구현했습니다.
- n의 값이 1 이상이면, n까지의 피보나치 수열의 값을 구해서 배열의 맨 뒤에 넣도록 구현했습니다.
- 새로운 피보나치 수열의 값을 구할 땐, 배열의 맨 뒤에 있는 두 원소의 값을 더해서 구했습니다.
- 수열을 다 구하고 나면, 맨 앞에 있는 값인 0을 제거해주도록 했습니다.

# 문제 2 : 이진검색
## 코드
```javascript
//값을 찾지 못한 경우에 해당하는 상수값.
const NOT_FOUND = -1;
//숫자에 대한 이진검색에 사용될 comparator
const NUMBER_COMPARATOR = (a, b) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};

export default function binarySearch(array, target, comparator = NUMBER_COMPARATOR) {
    //low는 최소값의 인덱스, high는 최대값의 인덱스.
    let low = 0;
    let high = array.length - 1;
    //최소값의 인덱스가 최대값의 인덱스보다 작거나 같을때만 수행
    while (low <= high) {
        //배열의 중간에 해당하는 인덱스를 구하되, 몫만 구할 수 있도록 내림 함수 사용
        const medium = Math.floor((low + high) / 2);
        const mediumValue = array[medium];
        if (comparator(mediumValue, target) === 0) {//중간값이 대상과 같다면, 그 위치를 반환.
            return medium;
        } else if (comparator(mediumValue, target) === 1) {//중간값이 대상보다 크다면, 최대값의 인덱스를 중간값의 이전 인덱스로 재설정.
            high = medium - 1;
        } else {//반대로 중간값이 작으면, 최소갑사의 인덱스를 중간값의 다음 값으로 재설정.
            low = medium + 1;
        }
    }
    return NOT_FOUND;//값을 찾지 못한 경우, 이에 해당하는 상수값을 반환.
}
```
## 문제풀이
**중간값 구하기**
- 대상값에 해당하는 매개변수 target을 정렬된 배열 array에서 검색합니다
- 변수 low와 high를 가지고 중간값의 인덱스를 구합니다.
- `(low+high)/2`의 결과가 정수가 아닐 수 있으므로, Math.floor()함수로 내림연산을 해주었습니다.

**중복코드 줄이기**
- 주어진 테스트코드를 살펴보면, 숫자에 대한 이진검색은 물론, 객체에 대한 검색도 가능해야 합니다.
- 처음엔 숫자에 대한 이진검색함수와 객체에 대한 이진검색함수를 따로 만들어서 구현했습니다. 
  그리고 매개변수 comparator의 값이 undefined면 숫자에 대한 이진검색 함수를 호출하고, 
  comparator 값이 존재하면 객체에 대한 이진검색을 호출하도록 구현했습니다.
- 하지만, 숫자에 대한 이진검색이나 객체에 대한 이진검색이나 값의 비교방식만 다를 뿐, 나머지 로직은 같습니다. 그래서 중복코드가 발생했습니다.
- 이러한 중복코드를 없애기 위해 고민하다가, 매개변수 comparator에 대한 기본값을 추가해주어서 해결했습니다.
- 기본 비교함수로 숫자에 대한 이진검색에 사용될 비교 함수를 사용해서, binarySearch함수 호출시 comparator의 인자를 넘기지 않으면 숫자에 대한 이진검색을 수행할 수 있도록 구현할 수 있었습니다.

# 문제 3 : 정방행렬 90도 시계방향 회전
## 코드
```javascript
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
```
## 문제풀이
**행렬을 회전하는 방법**
- 행렬의 외곽에서 시작해서 안쪽으로 들어가면서 행렬을 회전시킵니다.
- 행렬의 한칸씩 시계방향으로 90도 회전시켰습니다. 맨 아래는 왼쪽으로, 오른쪽은 아래로, 맨 위는 오른쪽으로 덮어쓰는 식으로 회전을 구현했습니다.
- 다만, 이렇게 하면 왼쪽에 있는 칸은 값이 덮어써져버립니다. 그래서 회전하기 전에 왼쪽 면에 해당하는 칸의 값을 임시변수에 저장해두었습니다. 그리고 왼쪽을 맨 위로 덮어쓰기할때엔 임시변수에 저장된 값을 꺼내어 사용하도록 구현했습니다.