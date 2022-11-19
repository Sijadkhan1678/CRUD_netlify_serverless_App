import React, { useEffect, useState } from 'react';
import Books from './components/Books'
import BookForm from './components/BookForm'
import './App.css';


interface Book {
  id?: string, 
  name: string
  author: string
  cover: string
  date: string

}
function App() {
 

  const [formData, setFormData] = useState <Book>({
      name: '',
      author: '',
      cover: '',
      date: ''
})
 

  const [open, setOpen] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([])
  
  const [current,setCurrent] = useState <Book | null> (null)

  console.log('formData to see change is here',formData);

  const handleModal = () => open ? setOpen(false) : setOpen(true)
 
  useEffect(() => {

    getBooks()
  }, [])

  const addBook = async (book:Book) => {
    console.log('book coverrrrrr',book.cover)
    
    const res = await fetch(`/.netlify/functions/add-book`, {

      method: 'post',
      body: JSON.stringify(book),
    })

    const result = await res.json()
    console.log('book successfully added', result.data)
  }
  const getBooks = async () => {

    const res = await fetch('/.netlify/functions/get-books')
    const data = await res.json()
    console.log('data',data)
    
    setBooks(data)
  
  }
  console.log('get books from faunadb database',books)

  const updateBook = async (book:Book) => {

    console.log('book is updated successfully',book)
     
    const {id,name,author,cover} = book

    const res = await fetch(`/.netlify/functions/update-book?id=${id}`,{
      method: 'put',
      body: JSON.stringify(book),
    })

    const data = await res.json() 
    console.log('book is updated successfully',data)
  }
  const deleteBook = async (id:string | number) => {
    // ?id=${id}

     const res = await fetch(`/.netlify/functions/delete-book?id=${id}`);

     const data = await res.json();

     console.log('book deleted successfully ',data)
  }

  const handleUpdate = (book:Book):void => {
   
    setCurrent(book)
    setFormData(book)
    handleModal()
}

  return (
    <div className="App">
      <button onClick={()=>handleModal()}>open modal baba</button>
      <BookForm open={open} handleModal={handleModal} formData={formData} setFormData={setFormData} addBook={addBook} updateBook={updateBook} current={current} setCurrent={setCurrent} />
      <Books books={books} handleUpdate={handleUpdate} deleteBook={deleteBook} />

    </div>
  );
}

export default App;
