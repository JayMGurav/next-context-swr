
export default function booksReducer(state = { books=[] }, action) {
  switch (action.type) {
    case 'INIT': {
      return { books: action.data }
    }

    case 'GET_BOOKS': {
      // const books = [...state.books, action.data]
      return { books: state.books }
    }

    case 'GET_BOOK': {
      // const books = [...state.books, action.data]
      return state.books.filter(book => book.id === action.data.id);
    }

    case 'ADD_BOOK': {
      // adds a book to the list
      return { books: [...state.books, action.data] }
    }
    case 'REMOVE_BOOK': {
      // remove book from the list
      return { books: state.books.filter(book => book.id !== action.data.id) }
    }
    case 'UPDATE_BOOK': {
      // update book from the list
      break;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}




export function generateId() {
  return Number((Math.random() * 1000000).toFixed(0));
}

export function initList() {
  const { data, error } = useSWR(`/api/books`, fetcher)

  return {
    type: 'INIT',
    data: !error && !data ? [] : data.books.map(book => ({ id: generateId(), ...book })),
  }
}

export function getbooks() {
  return {
    type: 'GET_BOOKS',
  }
}

export function getbook(id) {
  return {
    type: 'GET_BOOK',
    data: {
      id
    }
  }
}

// add a book 
export function addbook({ title, author, ISBN, language, published }) {
  return {
    type: 'ADD_BOOK',
    data: {
      title,
      author,
      ISBN,
      language,
      published
    }
  }
}

// remove a book
export function removebook(id) {
  return {
    type: 'REMOVE_BOOK',
    data: {
      id
    }
  }
}


export function updatebook({ id, ...details }) {
  return {
    type: 'UPDATE_BOOK',
    data: {
      id,
      ...details
    }
  }
}