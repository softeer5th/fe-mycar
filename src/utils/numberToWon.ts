type numberToWonProps = {
  type: 'full' | 'short';
  amount: number;
};
export const numberToWon = ({ type, amount }: numberToWonProps) => {
  if (type === 'full') {
    return amount.toLocaleString('ko-KR') + '원';
  } else if (type === 'short') {
    const manWon = amount / 10_000;
    return manWon.toLocaleString('ko-KR') + '만원 ~';
  }
};
