export const formatNumberToMoney = ({ money, unit, suffix = '' }: 
{ money: number; unit: number; suffix?: string }) => {
  const moneyMap = new Map<number, string>([
    [1, '원'],
    [10000, '만원'],
  ]);
  
  const dividedMoney = Math.floor(money / unit);
  
  return `${dividedMoney.toLocaleString()}${moneyMap.get(unit)}${suffix}`;
};

export const formatNumberToTwoDigits = (num: number) => num.toString().padStart(2, '0');