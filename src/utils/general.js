export function formatAmount(amount) {
  if (amount.includes(',')) {
    const [beforeComma, afterComma] = amount.split(',');

    const formattedBeforeComma = parseInt(beforeComma).toLocaleString('id-ID');

    return `${formattedBeforeComma},${afterComma}`;
  } else {
    return parseInt(amount).toLocaleString('id-ID');
  }
}
