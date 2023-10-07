function solution(money) {
  const pricePerAmericano = 5500;
  const maxAmericanoCount = Math.floor(money / pricePerAmericano);
  const remainingMoney = money % pricePerAmericano;

  return [maxAmericanoCount, remainingMoney];
}