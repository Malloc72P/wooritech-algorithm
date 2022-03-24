//값을 찾지 못한 경우에 해당하는 상수값.
const NOT_FOUND = -1;

/**
 * 컴퓨터 과학에서 반간 검색, 대수 검색 또는 이진 절단이라고도 하는 이진 검색은,
 * 정렬된 배열 내에서 대상 값의 위치를 찾는 검색 알고리즘입니다.
 * 이진 검색은 대상 값을 배열의 중간 요소와 비교합니다.
 * 그들이 같지 않으면 목표물이 결과가 거짓인 절반은 제거되고 성공할 때까지 나머지 절반에서 검색이 계속됩니다.
 * 나머지 절반이 비어 있는 상태에서 검색이 끝나면 대상이 배열에 없는 것입니다.
 * @param array 이진 검색을 수행할 배열
 * @param target 위치를 찾고자 하는 대상 값
 */
export default function binarySearch(array, target) {
    //low는 최소값의 인덱스, high는 최대값의 인덱스.
    let low = 0;
    let high = array.length - 1;
    //최소값의 인덱스가 최대값의 인덱스보다 작거나 같을때만 수행
    while (low <= high) {
        //배열의 중간에 해당하는 인덱스를 구하되, 몫만 구할 수 있도록 내림 함수 사용
        const medium = Math.floor((low + high) / 2);
        const mediumValue = array[medium];
        if (mediumValue === target) {//중간값이 대상과 같다면, 그 위치를 반환.
            return medium;
        } else if (mediumValue > target) {//중간값이 대상보다 크다면, 최대값의 인덱스를 중간값의 이전 인덱스로 재설정.
            high = medium - 1;
        } else {//반대로 중간값이 작으면, 최소갑사의 인덱스를 중간값의 다음 값으로 재설정.
            low = medium + 1;
        }
    }
    return NOT_FOUND;//값을 찾지 못한 경우, 이에 해당하는 상수값을 반환.
};