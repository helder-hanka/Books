import {
    FETCH_BOOKS_LOADING ,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR 
} from '../constants'

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: ''
}

const reducerFetchedBooks = (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                fetchedBooks: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                error: action.payload,
                fetchedBooks: [],
                isLoading: false
            }
        default: return state;
    }
}

export default reducerFetchedBooks;