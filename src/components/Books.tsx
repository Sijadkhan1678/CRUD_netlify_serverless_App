import React from 'react'
import {Grid,Typography,Box} from '@mui/material'
import BookItem  from './BookItem'


export const Books = () => {
  
  return (
  
    <Box width='100%'  mt={7} sx={{flexGrow:1}} >
    <Typography variant='h3' fontWeight="200" component='p' m={3.5}>Books Library</Typography>
    <Grid container 
          spacing={2} 
          direction='row' 
          justifyContent='space-evenly'>

      <BookItem  />
      <BookItem  />
      <BookItem  />
      <BookItem  />
      <BookItem  />
      <BookItem  />

    </Grid>
  </Box>
  )
}



export default Books;