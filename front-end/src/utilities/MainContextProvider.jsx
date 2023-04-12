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
  const [currentUser, setCurrentUser] = useState({});
  const [tasks, setTasks] = useState([]);

  // what's this state doing here? could we do something better?
  const [someState, setSomeState] = useState(
    'Hello Vite, This text is in the Context provider component',
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SomeContext.Provider
        value={{
          someState,
          setSomeState,
          isLoggedIn,
          setIsLoggedIn,
          currentUser,
          setCurrentUser,
          tasks,
          setTasks,
        }}
      >
        {children}
      </SomeContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}
