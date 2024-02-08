export function formatAmount(amount) {
  if (amount.includes(',')) {
    const [beforeComma, afterComma] = amount.split(',');

    const formattedBeforeComma = parseInt(beforeComma).toLocaleString('id-ID');

    return `${formattedBeforeComma},${afterComma}`;
  } else {
    return parseInt(amount).toLocaleString('id-ID');
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay} / ${formattedMonth} / ${year}`;
}
