import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { useSome } from './MainContextProvider';

export function usePost(query) {
  return useMutation({
    mutationFn: (data) => axios.post(`/${query}`, data),
  });
}

// create the post function for msl entries
const postMsl = (data) => axios.post(`http://localhost:8085/msl`, data);

// create post function for task entries
const postTask = (data) => axios.post(`http://localhost:8085/tasks`, data);

// create the custom hook to mutate (post, patch, delete) using the post function
export const useAddMslEntry = () =>
  useMutation({
    mutationFn: postMsl,
  });
export const useAddTaskEntry = () =>
  useMutation({
    mutationFn: postTask,
  });
