import fetcher from '@/utils/fetcher';
import { createContext, useContext } from 'react';
import useSWR from 'swr';

import booksReducer from './booklist-reducers';

const BooksStateContext = useContext();
const BooksDispatchContext = useContext();


function BooksProvider({ children }) {
  const [state, dispatch] = createContext(booksReducer, { books: [] });

  return (
    <BooksStateContext value={state}>
      <BooksDispatchContext value={dispatch}>
        {children}
      </BooksDispatchContext>
    </BooksStateContext>
  )
}


function useBooksState() {
  const context = useContext(BooksStateContext);
  if (context == undefined) {
    throw new Error('useBooksState must be used within a BooksProvider');
  }
  return context;
}

function useBooksDispatch() {
  const context = useContext(BooksDispatchContext);
  if (context == undefined) {
    throw new Error('useBooksDispatch must be used within a BooksProvider');
  }
  return context;
}
function useBooks() {
  return [useBooksState(), useBooksDispatch()];
}







export { BooksProvider, useBooksState, useBooksDispatch, useBooks }