import {
    FETCH_BOOKS_LOADING ,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR 
} from '../constants'
import axios from 'axios'

const fetchLoading = () => {
    return {
        type: FETCH_BOOKS_LOADING,
    }
}

const fetchBooksSuccess = title => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: title
    }
}
const fetchBooksError = error => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
}

const { REACT_APP_GOOGLE_API_KEY } = process.env

export const fetchBooks = title => {
    return dispatch => {
        dispatch(fetchLoading())
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${REACT_APP_GOOGLE_API_KEY}&maxResults=20`)
        .then( res => {
            const booksItemsArray = res.data.items;
            dispatch(fetchBooksSuccess(booksItemsArray))
        })
        .catch( error => {
            dispatch(fetchBooksError(error.message))
        })
    }
}