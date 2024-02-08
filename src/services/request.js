import axios from 'axios';

export function request(conf = {}) {
  const axiosRequest = axios.create({ ...conf });
  return axiosRequest;
}
