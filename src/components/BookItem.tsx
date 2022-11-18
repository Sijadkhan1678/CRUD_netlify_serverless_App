import React,{FC} from 'react'
import { Paper, Grid, Typography, Box, Button, Stack, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon  from '@mui/icons-material/Edit'
import book from "./book.jpg"

interface BookItemProps {
  handleUpdate: (book:{name:string,author: string, cover:string,date:string})=>void
  deleteBook: (id: string | number) => void

}

export const BookItem: FC <BookItemProps> = ({ handleUpdate, deleteBook}) => {



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
        <Stack direction="row" justifyContent='space-between'>
        <Typography component='p'
            fontWeight="300"
            fontSize="0.7rem"
            textAlign='left' p={1.3}>
            sijad
          </Typography>
          <Typography component='p'
            fontWeight="300"
            fontSize="0.7rem"
            textAlign='left' p={1.5}>
            date
          </Typography>

          </Stack> 
          <Stack direction='row' justifyContent='space-between'>
          <IconButton >
            {/* here we add delete function  */}
            <DeleteIcon  />
          </IconButton>
          <IconButton onClick={()=>handleUpdate({name:'sijad',author: 'sijad',cover:'www.google.photo.com',date:'2 nov 2022'})}>
            <EditIcon />
          </IconButton>
          </Stack>
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