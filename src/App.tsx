import React, { useEffect, useState } from 'react';
import Books from './components/Books'
import BookForm from './components/BookForm'
import { IconButton, Fab,Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import './App.css';


interface Book {
  id?: string,
  name: string
  author: string
  cover: string
  date: string

}
function App() {


  const [open, setOpen] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([])

  const [current, setCurrent] = useState<Book | null>(null)

  const handleModal = () => open ? setOpen(false) : setOpen(true)

  useEffect(() => {

    getBooks()
  }, [])

  const addBook = async (book: Book) => {


    await fetch(`/.netlify/functions/add-book`, {

      method: 'post',
      body: JSON.stringify(book),
    })



    getBooks()
  }
  const getBooks = async () => {

    const res = await fetch('/.netlify/functions/get-books')
    const data = await res.json()

    setBooks(data)

  }
  console.log('get books from faunadb database', books)

  const updateBook = async (book: Book) => {

    const { id } = book

    await fetch(`/.netlify/functions/update-book?id=${id}`, {

      method: 'put',
      body: JSON.stringify(book),

    })



     getBooks()
  }
  const deleteBook = async (id: string | number) => {

    await fetch(`/.netlify/functions/delete-book?id=${id}`);

    getBooks()
  }

  const handleUpdate = (book: Book): void => {

    setCurrent(book)
    handleModal()

  }

  return (
    <div className="App">
      <Box>
    
        <Fab color="secondary" sx={{ mx: '7.7rem', mt: '2rem' }} aria-label="add" >
          <AddIcon onClick={() => handleModal()} />
        </Fab>

      <BookForm open={open} handleModal={handleModal} addBook={addBook} updateBook={updateBook} current={current} setCurrent={setCurrent} />
      <Books books={books} handleUpdate={handleUpdate} deleteBook={deleteBook} />
      </Box>
    </div>
  );
}

export default App;
