import { ADD_BOOKS, DELETE_BOOKS, DELETE_ALL_BOOKS } from "../constants"
import { v4 as uuiv4 } from "uuid"

const initialState = {
    books: []
}


const helperAddData = action => {
    return {
        id: uuiv4(),
        title: action.payload.title,
        author: action.payload.author
    }
}

const removeDataById = (state, id) => {
    const books = state.filter( book => book.id !== id)
    return books
}


const actionAddBooks = (state = initialState.books, action) => {
    //Vérification dans lodastorage
    if (localStorage.getItem('booksData')) {
        // Récupéré les données dans localSorage
        state = JSON.parse(localStorage.getItem('booksData'))
    }

    switch (action.type) {
        case ADD_BOOKS:
            state = [...state, helperAddData(action)]
            localStorage.setItem('booksData', JSON.stringify(state))
            return state;
        case DELETE_BOOKS:
            state = removeDataById(state, action.payload)
            localStorage.setItem('booksData', JSON.stringify(state))
            return state;
        case DELETE_ALL_BOOKS:
            state = []
            localStorage.setItem('booksData', JSON.stringify(state))
            return state
        default: return state;
    }
}

export default actionAddBooks;