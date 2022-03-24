/**
 * 수학에서 피보나치 수는 피보나치 수열이라고 하는 아래와 같은 정수 수열의 수이며
 * 처음 두 수 이후의 모든 수는 앞의 두 수의 합이라는 사실을 특징으로 합니다.
 * @param n 입력 인자 n 까지의 피보나치 수열을 배열로 반환함
 * @returns {*[]} 피보나치 수열
 */
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
