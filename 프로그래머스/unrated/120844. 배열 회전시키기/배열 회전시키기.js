function solution(numbers, direction) {
  if (direction === 'left') {
    const firstElement = numbers.shift();
    numbers.push(firstElement);
  } else if (direction === 'right') {
    const lastElement = numbers.pop();
    numbers.unshift(lastElement);
  } else {
    console.error('유효하지 않은 방향입니다.');
  }
  return numbers;
}