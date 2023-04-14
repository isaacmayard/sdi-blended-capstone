/* eslint-disable react/jsx-no-constructed-context-values */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useContext, useState } from 'react';

// you can have multiple context like this one
const SomeContext = React.createContext();

// export custom hook to use the context, make one for each context you create
export const useSome = () => useContext(SomeContext);

// react query client
const queryClient = new QueryClient();

export function MainContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    admin: false,
    userName: 'Guess',
    password: null,
    loggedIn: null,
    rank: null,
    firstName: 'Guess',
    lastName: null,
    supervisor: null,
    contact_number: null,
    work_section: null,
    unit: null,
  });
  const [tasks, setTasks] = useState([]);
  const [msl, setMsl] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <SomeContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          currentUser,
          setCurrentUser,
          tasks,
          setTasks,
          msl,
          setMsl,
        }}
      >
        {children}
      </SomeContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}
