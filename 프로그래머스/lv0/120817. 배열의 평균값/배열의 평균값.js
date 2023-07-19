function solution(numbers) {
    let firstNum = numbers[0]
    let lastNum = numbers[numbers.length - 1]
    
    var answer = (firstNum + lastNum) / 2;
    return answer;
}