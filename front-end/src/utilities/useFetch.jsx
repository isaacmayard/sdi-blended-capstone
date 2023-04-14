import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useFetch(query) {
  return useQuery([`${query}Fetch`], async () => {
    const res = await axios.get(`http://localhost:8085/${query}/`);
    const { data } = res;
    return data;
  });
}
