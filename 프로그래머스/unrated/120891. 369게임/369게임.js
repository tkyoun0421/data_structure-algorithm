function solution(order) {
  const clapCount = String(order).split('').filter(character => '369'.includes(character)).length;
  return clapCount;
}