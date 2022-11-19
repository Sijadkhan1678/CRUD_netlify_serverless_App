import React,{FC} from 'react'
import {Grid,Typography,Box} from '@mui/material'
import BookItem  from './BookItem'

interface BooksProps {
     
     handleUpdate: (book:{name:string,author: string, cover:string,date:string}) => void
     deleteBook: (id: string | number) => void
     books: {
      id?: string 
      name:string,
      author: string, 
      cover:string,
      date:string
     }[]
}

export const Books:FC <BooksProps> = ({ books,handleUpdate,deleteBook }) => {
  
  return (
  
    <Box width='100%'  mt={7} sx={{flexGrow:1}} >
    <Typography variant='h3' fontWeight="200" component='p' m={3.5}>Books Library</Typography>
    <Grid container 
          spacing={2} 
          direction='row' 
          justifyContent='space-evenly'>

     { books && books.map( (book:any) => <BookItem key={book.id} book={book} handleUpdate={handleUpdate} deleteBook={deleteBook} />) }
     
    </Grid>
  </Box>
  )
}



export default Books;