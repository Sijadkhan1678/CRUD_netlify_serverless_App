import React from 'react'
import { Paper, Grid, Typography, Box, Button, Stack, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon  from '@mui/icons-material/Edit'
import book from "./book.jpg"


export const BookItem = () => {



  return (

    <Grid item xs={3.5} md={2.5} >
      <Paper elevation={6}>
         <img src={book}  alt='book title add here' width='100%' height='250px'/>
        <Box mt={2.4} pl={1.5} >
        {/* <img src={book}  alt='book title add here' width='166px' height='123px'/> */}

          <Typography variant='h3'
            fontWeight='500'
            fontSize='0.8rem'
          >
            Software Testing 
          </Typography>
        <Stack direction="row">
        <Typography component='p'
            fontWeight="300"
            fontSize="0.7rem"
            textAlign='left' p={1.3}>
            sijad
          </Typography>
          <Typography component='p'
            fontWeight="300"
            fontSize="0.7rem"
            textAlign='left' p={1.3}>
            date
          </Typography>

          </Stack> 
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>

        </Box>
  

      </Paper>
    </Grid>

  )
}

const style = {
  borderRadius: '0.8rem',
  height: '250px'
  // width:'400px'
}


export default BookItem;