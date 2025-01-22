export const formatNumberToMinMoney = (money: number) => {
  const UNIT = 10000;
  const UNIT_KR = '만원';
  const SUFFIX = '~';
  
  const dividedMoney = Math.floor(money / UNIT);
  
  return `${dividedMoney.toLocaleString()}${UNIT_KR}${SUFFIX}`
}

export const formatNumberToTwoDigits = (num: number) => {
  return num.toString().padStart(2, '0');
}