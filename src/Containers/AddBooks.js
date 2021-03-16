import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBook, deleteBook, deleteAllBooks } from '../redux/actions/actionAddBooks'
import FlipMove from 'react-flip-move';

const AddBooks = ({libraryData, addBook, deleteBook, deleteAllBooks}) => {

  const initialState = {
    title: "",
    author: ""
  }
  const [newData, setNewData] = useState(initialState);
  

  const handleSubmit = e => {
    e.preventDefault();
    addBook(newData)
    setNewData(initialState)
  }
  const displayData = libraryData.length > 0 ? 
    <FlipMove>
      {
        libraryData.map( data => {
          return(
            <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between">
              <span><strong>Titre</strong> {data.title} </span>
              <span><strong>Auteur</strong> {data.author} </span>
              <span onClick={ e => deleteBook(data.id) } className="btn btn-danger">X</span>
            </li>
          )
        } )
      }
    </FlipMove>
  
  : <p className="text-center">Aucune data à afficher</p>

  const deleteAllBooksBtn = libraryData.length > 0 && 
  <div className="d-flex justify-content-center">
    <button onClick={() => deleteAllBooks()} className="btn btn-danger mt-4 mb-5">Effacer tous les livres</button>
  </div>

  return (
    <main className="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliotéque</p>

          <form onSubmit={handleSubmit} className="form-inline justify-content-center">
            <div className="form-group mb-3">
              <input 
                type="text" 
                className="form-control ml-3"
                placeholder="Titre"
                required
                value={newData.title}
                onChange={ e => setNewData({...newData, title: e.target.value}) }
              />
            </div>

            <div className="form-group mb-3">
              <input 
                type="text" 
                className="form-control ml-3"
                placeholder="Auteur"
                required
                value={newData.author}
                onChange={ e => setNewData({...newData, author: e.target.value}) }
              />
            </div>

            <div className="form-group mb-3">
              <button className="btn btn-outline-secondary ml-3 ">Ajouter un livre</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{minHeight: '200px'}}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {displayData}
            </ul>
              { deleteAllBooksBtn}
          </div>
        </div>
      </div>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    libraryData: state.library
  }

}

const dispatchToProps = dispatch => {
  return {
    addBook: (param) => dispatch(addBook(param)),
    deleteBook: (id) => dispatch(deleteBook(id)),
    deleteAllBooks: () => dispatch(deleteAllBooks())
  }
}

export default connect(mapStateToProps, dispatchToProps)(AddBooks)
