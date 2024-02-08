import dayjs from 'dayjs';

export const formatAmount = (amount) => {
  if (amount.includes(',')) {
    const [beforeComma, afterComma] = amount.split(',');

    const formattedBeforeComma = parseInt(beforeComma).toLocaleString('id-ID');

    return `${formattedBeforeComma},${afterComma}`;
  } else {
    return parseInt(amount).toLocaleString('id-ID');
  }
};

export const formatDate = (dateString) => {
  const day = dayjs(dateString).date();
  const month = dayjs(dateString).month();
  const year = dayjs(dateString).year();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay} / ${formattedMonth} / ${year}`;
};
