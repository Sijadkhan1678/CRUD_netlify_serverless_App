import React,{FC} from 'react'
import {Grid,Typography,Box} from '@mui/material'
import BookItem  from './BookItem'

interface BooksProps {
     
     handleUpdate: (book:{name:string,author: string, cover:string,date:string}) => void
     deleteBook: (id: string | number) => void
}

export const Books:FC <BooksProps> = ({handleUpdate,deleteBook}) => {
  
  return (
  
    <Box width='100%'  mt={7} sx={{flexGrow:1}} >
    <Typography variant='h3' fontWeight="200" component='p' m={3.5}>Books Library</Typography>
    <Grid container 
          spacing={2} 
          direction='row' 
          justifyContent='space-evenly'>

      <BookItem handleUpdate={handleUpdate} deleteBook={deleteBook} />
      {/* <BookItem  />
      <BookItem  />
      <BookItem  />
      <BookItem  />
      <BookItem  /> */}

    </Grid>
  </Box>
  )
}



export default Books;